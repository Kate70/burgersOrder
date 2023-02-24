import React from 'react'
import Order from '../Order/Order'
import Container from '../Container/Container'
import style from "./Catalog.module.css";


const goodsList = [
  { title: 'Мясная бомба' },
  { title: 'Супер сырный' },
  { title: 'Сытный' },
  { title: 'Итальянский' },
  { title: 'Вечная классика' },
  { title: 'Тяжелый удар' },
];

const Catalog = () => {
  return (
    <section className = {style.catalog_1}>
    <Container >
        <div className={style.container}> 
   <Order/>

      <div className = {style.wrapper}>
        <h2 className = {style.title}>Бургеры</h2>

        <div className = {style.wrap_list}>
          <ul className = {style.list}>
            <li className = {style.item}>
              {
                goodsList.map(item =>(
                  <li className={style.item}>
                    {item.title}
                  </li>
                ))
              }
            
            </li>        

          </ul>
        </div>
      </div>      
     </div>
    </Container>
  </section>
  )
  }

export default Catalog