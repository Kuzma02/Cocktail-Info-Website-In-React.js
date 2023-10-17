import React from "react";
import Wrapper from "../assets/wrappers/CocktailList";
import { CocktailCard } from "./CocktailCard";

export const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return (
      <h4 style={{ textAlign: 'center' }}>No matching cocktails found...</h4>
    );
  }
  return (
    <Wrapper>
      {drinks.map((drink) => (
        <CocktailCard id={drink.idDrink} key={drink.idDrink} strAlcoholic={drink.strAlcoholic} strGlass={drink.strGlass} strDrinkThumb={drink.strDrinkThumb} strDrink={drink.strDrink} />
      ))}
    </Wrapper>
  );
};
