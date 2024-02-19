import { Layout } from '../../Components/Layout'
import { useParams } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context';
import { useContext } from 'react';

function SingIn() {

  const shoppingCartContext = useContext(ShoppingCartContext); 
  const {userApp, setUserApp, setSessionState} = shoppingCartContext;
  const {url} = useParams();
 
  const saveUser = (e) => {
    e.preventDefault();
    if(url === "sing-in")
      {

        const formData = new FormData(e.target);
    
        const formDataObject = {};
        for (const [key, value] of formData.entries()) {
          formDataObject[key] = value;
        }

        setUserApp(formDataObject);
        setSessionState(true);
        console.log(userApp);
      }
    else
      {
        const formData = new FormData(e.target);
    
        const email = formData.get("email");
        const password = formData.get("password");
        const password2 = formData.get("password2");
        if(password != password2)
          {
            alert("The passwords don't match please try it again :/");
          }
        else
          {
            console.log(email);
            console.log(password);
            console.log(password2);
          }
      }
  }

  const dataOnSingUp = (params) => {
    if(params === "sing-in")
      {
        return (
          <div>
            <h2 className="text-center text-2xl font-bold">Sing in</h2>

            <form action="" className="flex flex-col w-80 text-purple-500 text-xl mt-4 gap-4"
              onSubmit={(e) =>saveUser(e)}
            >
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

            <form action="" className="flex flex-col w-80 text-purple-500 text-xl mt-4 gap-4"
               onSubmit={(e) => saveUser(e)}
            >
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