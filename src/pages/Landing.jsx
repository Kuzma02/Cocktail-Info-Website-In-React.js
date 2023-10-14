import React from 'react'
import { useLoaderData } from 'react-router-dom';

export const loader = async () => {
  return "something";
}

export const Landing = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <h1>Landing</h1>
  )
}

export default Landing