import classNames from "classnames";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "../Container/Container";
import style from "./Navigation.module.css";
import { categoryRequestAsync, changeCategory } from "../../store/category/categorySlice";
import { API_URL } from "../../const";

const Navigation = () => {
  const { category, activeCategory } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(categoryRequestAsync('max'))

  },[])

  return (
    <nav className={style.navigation}>
      <Container className={style.container} />
      <ul className={style.list}>
        {category.map((item, i) => (
          <li className={style.item} key = {item.title}>
            <button
              className={classNames(
                style.button,
                activeCategory === i ? style.button_active : ""
              )}
              style={{backgroundImage: `url(${API_URL}/${item.image})`}}
              onClick = {() =>{
                dispatch(changeCategory({indexCategory: i}))
              }}
            >
              {item.rus}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
