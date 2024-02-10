import { useContext } from 'react'

import { Layout } from '../../Components/Layout'
import { Card } from '../../Components/Card'
// import { Loader } from '../../Components/Loader';
import { ProductDetail } from '../../Components/ProductDetail';
import { ShoppingCartContext } from '../../Context';

function Home() {
  
  const { setSearchByTitle, filtredProducts } = useContext(ShoppingCartContext);

   const renderView = () => {
      if(filtredProducts?.length > 0)
          {
            return(
              filtredProducts?.map((product) => (
                <Card 
                  key={product.id}
                      {...product}
                />
              ))
            )
          }
      else
        {
          return (
              <div className='absolute mt-60 w-4/5'>
                <h2 className='text-bold text-center text-purple-950 text-2xl'>We dont have anything 😥</h2>
              </div> 
            )
        }
   
   }  
 
  return (
    <Layout >
      <div className='flex items-center justify-center w-80 mb-4 sticky'>
        <h1 className='font-medium text-xl'>Exclusive Products</h1>
      </div>
      <input 
        type="text" 
        placeholder="search a product"
        className="rounded-lg border-black w-80 p-4 mb-4 focus:outline-none border" 
        onChange={(e) => {
          setSearchByTitle(e.target.value);
        }}
      />
      <div className="grid place-items-center gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-xl">
        {
          renderView()
        }
      </div>
      <ProductDetail />
    </Layout>
  )
}


export {
    Home
}