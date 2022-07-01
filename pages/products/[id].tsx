import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import React from 'react'

type Props = {}
type ProductProps = {
  product: any
}
const DetailPage = ({product}:ProductProps) => {
  if(!product) return null
  return (
    <div>Detail: {product.name}</div>
  )
}
export const getStaticPaths: GetStaticPaths = async () => {
 const data = await (await fetch(`http://localhost:4000/products`)).json();
 const paths = data.map((item:any)=>{
  return {params: {id: item.id}}
 });
 return {
 paths,
 fallback: false
 } 
}
export const getStaticProps: GetStaticProps<ProductProps> = async (context: GetStaticPropsContext)=>{
  const data = await (await fetch(`http://localhost:4000/products/${context.params?.id}`)).json()
  if(!data){
    return{
      notFound:true
    }
  }
  return {
    props:{
      product:data,
    }
  }
}

export default DetailPage