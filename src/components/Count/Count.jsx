import React from 'react'
import style from "./Count.module.css";

const Count = () => {
  return (
    <div className={style.count}>
    <button className={style.count__minus}>-</button>
    <p className={style.count__amount}>2</p>
    <button className={style.count__plus}>+</button>
</div>
  )
}

export default Count