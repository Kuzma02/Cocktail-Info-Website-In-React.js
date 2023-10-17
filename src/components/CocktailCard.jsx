import React from "react";
import Wrapper from "../assets/wrappers/CocktailCard";
import { Link } from "react-router-dom";

export const CocktailCard = (props) => {
  const { id, strAlcoholic, strGlass, strDrinkThumb, strDrink } = props;
  return (
    <Wrapper>
      <div className="img-container">
        <img
          src={ strDrinkThumb }
          alt={strDrink}
          className="img"
        />
      </div>
      <div className="footer">
        <h4>{ strDrink }</h4>
        <h5>{ strGlass }</h5>
        <p>{ strAlcoholic }</p>
        <Link to={`/cocktail/${id}`} className='btn'>
          details
        </Link>
      </div>
    </Wrapper>
  );
};
