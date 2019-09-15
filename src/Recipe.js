import React from "react";
import style from "./recipe.module.css";
const Recipes = props => {
  return (
    <div className={style.recipe}>
      <h1>{props.title}</h1>
      <p>{props.calories}</p>
      <img className={style.image} src={props.image} alt="" />
      <ol>
        {props.ingredients.map(i => (
          <li>{i.text}</li>
        ))}
      </ol>
    </div>
  );
};
export default Recipes;
