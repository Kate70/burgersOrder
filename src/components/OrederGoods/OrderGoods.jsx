import React from 'react'
import Count from '../Count/Count';
import style from "./OrderGoods.module.css";


export const OrderGoods = ({item}) => {
    return (
        <li className={style.item}>
            <img
                className={style.image}
                src="img/free_1.jpg"
            alt={item}
            />

            <div className={style.goods}>
                <h3 className={style.title}>{item}</h3>

                <p className={style.weight}>180г</p>

                <p className={style.price}>
                    245
                    <span className={style.currency}>₽</span>
                </p>
            </div>

           <Count count ={10}/>
        </li>

    )
}
