import axios from "axios";
import React from "react";
import Wrapper from "../assets/wrappers/CocktailPage";
import { Link, useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const singleCocktailQuery = (id) => {
  return {
    queryKey: ['cocktail', id],
    queryFn: async () => {
      const { data } = await axios.get(`${singleCocktailUrl}${id}`);
      return data;
    }
  }
}

export const loader = (queryClient) => async ({ params }) => {
  const { id } = params;

  await queryClient.ensureQueryData(singleCocktailQuery(id));
  return { id };
};

export const Cocktail = () => {
  const { id } = useLoaderData();
  const { data } = useQuery(singleCocktailQuery(id));
  if (!data) return <Navigate to='/' />;
  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">back home</Link>
        <h3>{data.drinks[0].strDrink}</h3>
      </header>
      <div className="drink">
        <img
          src={data.drinks[0].strDrinkThumb}
          alt={data.drinks[0].strDrink}
          className="img"
        />
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span>
            {data.drinks[0].strDrink}
          </p>
          <p>
            <span className="drink-data">category :</span>
            {data.drinks[0].strCategory}
          </p>
          <p>
            <span className="drink-data">info :</span>
            {data.drinks[0].strAlcoholic}
          </p>
          <p>
            <span className="drink-data">glass :</span>
            {data.drinks[0].strGlass}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>
            {Object.keys(data.drinks[0]).map((property, index) => {
              if(property.startsWith("strIngredient") && data.drinks[0][property]){
                return(
                  <span key={index} className="ing">{data.drinks[0][property]},</span>
                  )
              }else{
                return null;
              }
              
            })}
          </p>
          <p>
            <span className="drink-data">instructions :</span>
            {data.drinks[0].strInstructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cocktail;
