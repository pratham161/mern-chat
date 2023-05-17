import {useContext, useState} from "react";
import axios from "axios";
import {UserContext} from "../context/UserContext";

export default function RegisterAndLoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginOrRegister, setIsLoginOrRegister] = useState('login');
  const {setUsername:setLoggedInUsername, setId} = useContext(UserContext);
  async function handleSubmit(ev) {
    ev.preventDefault();
    const url = isLoginOrRegister === 'register' ? 'register' : 'login';
    const {data} = await axios.post(url, {username,password}).then((e)=>{
      if(e){
        console.log(e);
      }
    });
    setLoggedInUsername(username);
    setId(data.id);
  }
  return (
    <div className="bg-blue-50 h-screen md:h-[80vh] md:w-[70vw] flex items-center md:rounded-3xl">
      <form className="w-64 mx-auto mb-12 space-y-4" onSubmit={handleSubmit}>
        <input value={username}
               onChange={ev => setUsername(ev.target.value)}
               type="text" placeholder="username"
               className="block w-full rounded-3xl p-2 px-4 mb-2 border" />
        <input value={password}
               onChange={ev => setPassword(ev.target.value)}
               type="password"
               placeholder="password"
               className="block w-full rounded-3xl p-2 px-4 mb-2 border" />
        <button className="bg-blue-500 font-bold text-white block w-full rounded-full p-2">
          {isLoginOrRegister === 'register' ? 'Register' : 'Login'}
        </button>
        <div className="text-center mt-2">
          {isLoginOrRegister === 'register' && (
            <div className="text-zinc-500">
              Already a member?
              <button className="ml-1 text-blue-500" onClick={() => setIsLoginOrRegister('login')}>
                Login here
              </button>
            </div>
          )}
          {isLoginOrRegister === 'login' && (
            <div className="text-zinc-500">
              Dont have an account?
              <button className="ml-1 text-blue-500" onClick={() => setIsLoginOrRegister('register')}>
                Register
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}