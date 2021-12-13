import styles from './Rating.module.scss';
import cn from 'classnames';

import { DetailedHTMLProps, HTMLAttributes, ReactNode, useEffect, useState, KeyboardEvent } from 'react';
import { RatingSvg } from './RatingSvg';

export interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    rating: number;
    isEdit?: boolean;
    setRating?: (rating:number) => void; 
}


export const Rating = ({rating, isEdit=false, setRating, ...props}:RatingProps):JSX.Element => {
    const [ratingArray, setRattingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating (rating);
    }, [rating]);

    const constructRating = (curRating:number) => {
        const updateRating = ratingArray.map((item:JSX.Element, num:number) => {
            return (
                <>
                <span>
                    <RatingSvg id='svg' 
                    className={cn(styles.star, {
                        [styles.filled]: num < curRating,
                    })}
                    onMouseEnter = {()=> changeDisplay(num+1)}
                    onMouseLeave = {()=> changeDisplay(rating)}
                    onClick = {() => changeClick (num + 1)}
                    tabIndex = {isEdit ? 0 : -1}
                    onKeyDown = {(e:KeyboardEvent<SVGElement>) => isEdit && handlespace (num + 1, e)}
                    />
                </span> 
                </>
                
            );
        })
        setRattingArray (updateRating);
    }

    const changeDisplay = (i:number) => {
        if (!isEdit) {
            return;
        }

        constructRating (i);
    }

    const changeClick = (i:number) => {
        if (!isEdit || !setRating) {
            return;
        }

        setRating (i);
    }

    const handlespace = (i:number, e:KeyboardEvent<SVGElement>) => {
        if (e.code != 'Space' || !setRating) {
            return;
        }

        setRating (i);
    }

    return (
        <div {...props} className={cn(styles.ratingBg)}>
            {ratingArray.map((item, num) => (<span key={num}>{item}</span>))}
        </div>
    )
}

