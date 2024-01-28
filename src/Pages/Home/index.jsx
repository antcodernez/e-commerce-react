import { useEffect, useState } from 'react'

import { Layout } from '../../Components/Layout'
import { Card } from '../../Components/Card'
// import { Loader } from '../../Components/Loader';
import { ProductDetail } from '../../Components/ProductDetail';

function Home() {
  const [products, setProducts] = useState(null); //useState es un hook que se utiliza para agregar el estado a los componentes de función en React. Permite que un componente de función tenga un estado local, lo que significa que puede almacenar y modificar datos a lo largo del ciclo de vida del componente.
  useEffect(() => {
    try {
      fetch("https://api.escuelajs.co/api/v1/products")
      .then(res => res.json())
      .then(data => setProducts(data.slice(0, 32)))
    } catch (error) {
      console.error(error);
    }
    
  }, []); //se utiliza para realizar efectos secundarios en componentes de función. Estos efectos secundarios pueden incluir cosas como la manipulación del DOM, solicitudes de red, suscripciones a eventos y más. useEffect se ejecuta después de cada renderizado del componente y se utiliza para manejar lógica que no debería estar directamente en el flujo de renderizado principal del componente.

  return (
    <Layout >
      <div className="grid place-items-center gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-xl">
        {
          products?.map((product) => (
            <Card 
              key={product.id}
                  {...product}
            />
          ))
        }
      </div>
      <ProductDetail />
    </Layout>
  )
}


export {
    Home
}