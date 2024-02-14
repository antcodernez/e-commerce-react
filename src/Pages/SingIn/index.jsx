import { Layout } from '../../Components/Layout'
import { useParams } from 'react-router-dom'

function SingIn() {
  
  const {url} = useParams();
 
  const saveUser = () => {
    alert("Sing in");
  }

  const dataOnSingUp = (params) => {
    if(params === "sing-in")
      {
        return (
          <div>
            <h2 className="text-center text-2xl font-bold">Sing in</h2>

            <form action="" className="flex flex-col w-80 text-purple-500 text-xl mt-4 gap-4">
              <label htmlFor="email">
                <span>Email</span> <br />
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  className="w-full h-11 rounded-lg  border border-violet-950 p-4"
                  placeholder="email@example.com"
                  required
                />
              </label>
              <label htmlFor="password">
              <span>Password</span> <br />
                <input 
                  type="password" 
                  name="password" 
                  id="password" 
                  className="w-full h-11 rounded-lg  border border-violet-950 p-4"
                  placeholder="*******"
                  required
                />
              </label>
              
              <button 
                className="border rounded-lg bg-violet-700 w-full h-11 font-semibold text-white"
                type="submit"
                onClick={() => saveUser()}
              >Sing in</button>
            </form>
          </div>
        )
      }
    else if (params === "sing-up")
      {
        return (
          <div>
            <h2 className="text-center text-2xl font-bold">Register</h2>

            <form action="" className="flex flex-col w-80 text-purple-500 text-xl mt-4 gap-4">
              <label htmlFor="email">
                <span>Email</span> <br />
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  className="w-full h-11 rounded-lg  border border-violet-950 p-4"
                  placeholder="email@example.com"
                  required
                />
              </label>
              <label htmlFor="password">
              <span>Password</span> <br />
                <input 
                  type="password" 
                  name="password" 
                  id="password" 
                  className="w-full h-11 rounded-lg  border border-violet-950 p-4"
                  placeholder="*******"
                  required
                />
              </label>
              <label htmlFor="password2">
              
              <span>Repeat your password</span> <br />
                <input 
                  type="password" 
                  name="password2" 
                  id="password2" 
                  className="w-full h-11 rounded-lg  border border-violet-950 p-4"
                  placeholder="*******"
                  required
                />
              </label>
              
              <button 
                className="border rounded-lg bg-violet-700 w-full h-11 font-semibold text-white"
                type="submit"
                onClick={() => saveUser()}
              >Sing in</button>
            </form>
          </div>
        )
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