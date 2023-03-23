import classNames from "classnames";
import React from "react";
import { useSelector } from "react-redux";
import Container from "../Container/Container";
import style from "./Navigation.module.css";

const Navigation = () => {
  const { category, activeCategory } = useSelector((state) => state.category);
  console.log(category);
  return (
    <nav className={style.navigation}>
      <Container className={style.container} />
      <ul className={style.list}>
        {category.map((item, i) => (
          <li className={style.item}>
            <button
              className={classNames(
                style.button,
                activeCategory === i ? style.button_active : ""
              )}
              style={{backgroundImage: `url(${item.image})`}}
              onClick = {() =>{
                
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
