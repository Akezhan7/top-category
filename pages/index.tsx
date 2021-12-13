import { GetStaticProps } from 'next';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Button, Htag, Par, Rating, Tag } from '../components';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interface/menu.interface';

function Home({menu, firstCategory}:HomeProps):JSX.Element {
  const [count, setCount] = useState <number> (0);
  const [rate, setRate] = useState <number> (4);

  return (
    <>
      <Htag tag="h1">{count}</Htag>
      <Button appearance="primary" arrow="down" onClick={() => setCount (x => x + 1)}>Кнопка</Button>
      <Button appearance="ghost" arrow="right" onClick={() => setCount (x => x - 1)}>Кнопка2</Button>
      <Par fontSize='less'>Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills — навыки, которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и маркетологами. Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.</Par>
      <Par>Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills — навыки, которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и маркетологами. Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.</Par>
      <Par fontSize='big'>Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills — навыки, которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и маркетологами. Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.</Par>
      <Tag size='big' color="silver">10</Tag>
      <Tag size='big' color="ghost">Photoshop</Tag>
      <Tag size='less' color="green">-10 000</Tag>
      <Tag size='less' color="red" href='https://hh.kz/'>hh.kz</Tag>
      <Tag size='big' color="primary">Работа в Photoshop</Tag>
      <Rating rating={rate} isEdit={true} setRating={setRate}/>
      <ul>
        {menu.map (m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
      </ul>
    </>
  )
}

export default withLayout (Home);


// SSR
export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  let firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {firstCategory});
  return {
    props: {
      menu,
      firstCategory
    }
  }
}

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}