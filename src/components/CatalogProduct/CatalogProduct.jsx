import React from 'react'
import style from "./CatalogProduct.module.css";



const CatalogProduct = () => {
  return (
    <article className = "product">
    <img src="img/photo-5.jpg" alt="Мясная бомба" className = "product__image"/>

    <p className = "product__price">689<span className = "currency">₽</span></p>

    <h3 className = "product__title">
      <button className = "product__detail">Мясная бомба</button>
    </h3>

    <p className = "product__weight">520г</p>

    <button className = "product__add" type="button">Добавить</button>
  </article>
  )
}

export default CatalogProduct