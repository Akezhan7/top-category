import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { withLayout } from '../../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../../interface/menu.interface';
import { TopPageModel } from '../../interface/page.interface';
import { ParsedUrlQuery } from 'querystring';
import { ProductModel } from '../../interface/product.interface';

const firstCategory = 0;

function Courses({menu, page, products}:CoursesProps):JSX.Element {

  return (
    <>
      {products.length}
    </>
  );
}

export default withLayout (Courses);


// SSR

export const getStaticPaths: GetStaticPaths = async () => {
    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {firstCategory});
    return {
        paths: menu.flatMap(m => m.pages.map (p => '/courses/' + p.alias)),
        fallback: true
    }
}


export const getStaticProps: GetStaticProps<CoursesProps> = async ({params}:GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
        return {
            notFound: true
        };
    }
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {firstCategory});
  const { data: page } = await axios.get<TopPageModel>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias);
  const { data: products } = await axios.post<ProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find/', {
      category: page.category,
      limit: 10
  });

  return {
    props: {
      menu,
      firstCategory,
      page,
      products
    }
  } 
}

interface CoursesProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
  page: TopPageModel;
  products: ProductModel[];
}