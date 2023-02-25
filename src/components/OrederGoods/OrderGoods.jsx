import React from 'react'
import Count from '../Count/Count';
import style from "./OrderGoods.module.css";


export const OrderGoods = () => {
    return (
        <li className="order__item">
            <img
                className="order__image"
                src="img/free_1.jpg"
                alt="Картошка фри"
            />

            <div className="order__goods goods">
                <h3 className="goods__title">Картошка фри</h3>

                <p className="goods__weight">180г</p>

                <p className="goods__price">
                    245
                    <span className="currency">₽</span>
                </p>
            </div>

           <Count/>
        </li>

    )
}
