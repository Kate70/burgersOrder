import React from 'react'
import style from "./CatalogProduct.module.css";
import { API_URL } from '../../const';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/order/orderSlice';



const CatalogProduct = ({ item }) => {
  const dispatch = useDispatch()
  
  return (
    <article className = {style.product}>
    <img src={`${API_URL}/${item.image}`} alt={item.title} className = {style.product__image}/>

    <p className = {style.product__price}>{item.price}<span className = "currency">₽</span></p>

    <h3 className = {style.product__title}>
      <button className = {style.product__detail}>{item.title}</button>
    </h3>

    <p className = {style.product__weight}>{item.weight} g</p>

    <button className = {style.product__add}
     type="button"
     onClick={()=>{
      dispatch(addProduct({id: item.id}))
     }}
    >Добавить</button>
  </article>
  )
}

export default CatalogProduct