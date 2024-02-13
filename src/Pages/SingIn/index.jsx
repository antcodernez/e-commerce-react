import { Layout } from '../../Components/Layout'
import { useParams } from 'react-router-dom'

function SingIn() {
  
  const {url} = useParams();
  const dataOnSingUp = (params) => {
    if(params === "sing-in")
      {
        return <p>Inicia sesion</p>
      }
    else if (params === "sing-up")
      {
        return <p>Registrate</p>
      }
  }

  return (
    <Layout>
      {dataOnSingUp(url)}
    </Layout>
  )
}

export {
    SingIn
}