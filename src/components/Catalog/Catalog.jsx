import React, { useEffect } from 'react'
import Order from '../Order/Order'
import Container from '../Container/Container'
import style from "./Catalog.module.css";
import CatalogProduct from "../CatalogProduct/CatalogProduct"
import { useDispatch, useSelector } from 'react-redux';
import { productRequestAsync } from '../../store/product/productSlice';


// const goodsList = [
//   { title: 'Мясная бомба' },
//   { title: 'Супер сырный' },
//   { title: 'Сытный' },
//   { title: 'Итальянский' },
//   { title: 'Вечная классика' },
//   { title: 'Тяжелый удар' },
// ];

const Catalog = () => {
const {products} = useSelector(state => state.product);
const {category, activeCategory} = useSelector(state=> state.category)

const dispatch = useDispatch()

useEffect(() => {
  if (category.length){
    dispatch(productRequestAsync(category[activeCategory].title))
  }
},[category, activeCategory])



  return (
    <section className = {style.catalog_1}>
    <Container >
        <div className={style.container}> 
   <Order/>

      <div className = {style.wrapper}>
        <h2 className = {style.title}>{category[activeCategory]?.rus}</h2>

        <div className = {style.wrap_list}>
          <ul className = {style.list}>
            
              {
                products.map(item =>(
                  <li className={style.item} key={item.id} >
                    <CatalogProduct item = { item}/>
                  </li>
                ))
              }          
                  

          </ul>
        </div>
      </div>      
     </div>
    </Container>
  </section>
  )
  }

export default Catalog