import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import React from 'react'

type Props = {}
type productProps ={
  products:any[]
}


const ProductPage = ({ products }: productProps) => {
  console.log("Product page client");
  console.log("products",products);
  if(!products) return null;
  return (
    <div>
      {products.map((item) => (
      <div key={item.id}><Link href={`/products/${item.id}`}><a > {item.name}</a></Link></div>
    ))}
  </div>
  )
}

export const getStaticProps : GetStaticProps<productProps> = async (context: GetStaticPropsContext)=>{
  const data = await (await (fetch("http://localhost:4000/products"))).json();
  if(!data){
    return {
      notFound:true
    }
  }
  return {
    props: {products:data}
  }
}

export default ProductPage