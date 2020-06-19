import React from 'react';
import Head from 'next/head';
import data from '../data';
import ProductCard from "../components/ProductCard";

export default function Home() {
  const products = [];

  for (let i = 1; i <= 100; i++) {
    data.forEach(item => products.push({ ...item, key: `${i}-${item.id}` }));
  }

  return (
    <>
      <Head>
        <title>Styled-Components</title>
      </Head>
      <div>
        {products.map(product => <ProductCard key={product.key} product={product} />)}
      </div>
    </>
  )
}
