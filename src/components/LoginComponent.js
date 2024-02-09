import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Route, Routes} from "react-router-dom";
import Swal from "sweetalert2"

const LoginComponent = () => {
  let [username, usernameupdate] = useState('');
  let [password, passwordupdate] = useState('');

  const navigate = useNavigate();

  useEffect(()=>{ sessionStorage.clear();
  },[]);

  const ProceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
        fetch("http://localhost:3400/users/").then((res) => {
          console.log(res, "response");
            return res.json();
        }).then((resp) => {
            console.log(resp)
            if (Object.keys(resp).length === 0) {
                Swal.fire('Please Enter valid username');
            } else {
                if (resp.map((pass) => pass.password === password)) {
                    Swal.fire('Success Login');
                    sessionStorage.setItem('username',username);
                    username = ''
                    password = ''
                    navigate('/dashboard', {replace: true})
                }else{
                    Swal.fire('Please Enter valid credentials');
                }
            }
        }).catch((err) => {
            Swal.fire('Login Failed due to :' + err.message);
        });
    }
  }

  const validate = () => {
    let result = true;
    if (username === '' || username === null) {
        result = false;
        Swal.fire('Please Enter Username');
    }
    if (password === '' || password === null) {
        result = false;
        Swal.fire('Please Enter Password');
    }
    return result;
  }


  return (
      <div className="pl-16 bg-gray-100 max-md:pl-5">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow mt-10 text-lg text-zinc-500 max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ef9ac5dcd763044ba828a226593c59bd045c7593dd034220af29ed23f686af3?apiKey=61ff43272a5b46609e5949f30c25179c&"
                className="aspect-square w-[70px]"
              />
              <div className="flex flex-col pl-10 mt-14 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
                <div className="text-3xl font-medium text-gray-900 max-md:max-w-full">
                  Log In and See The World With MyInet
                </div>
                <div className="mt-5 leading-7 max-md:max-w-full">
                  We provide variant data that you can use it in order
                  <br />
                  to get the better perfomance at your Internet
                </div>
                <div className="flex flex-col py-12 mt-14 bg-white rounded-none max-md:mt-10 max-md:max-w-full">
                  <form onSubmit={ProceedLogin}>
                    <div className="flex flex-col px-12 mt-3 max-md:px-5 max-md:max-w-full">
                        <label>Username</label>
                        <input value={username} onChange={e => usernameupdate(e.target.value)} className="border border-black px-2" name="username" />
                        <label>Password</label>
                        <input type="password" value={password} onChange={e => passwordupdate(e.target.value)} className="border border-black px-2"  name="password" />
                    </div>
                    <div className="flex flex-col px-12 mt-6 mb-2.5">
                      <button type="submit" className="text-white w-20 bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2">Login</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden relative flex-col grow justify-center items-center px-16 py-12 min-h-[900px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/04d57595a2c3d8f134ebd43c52032b82ab534b1c5d57b5193462f0d3abfe61b2?apiKey=61ff43272a5b46609e5949f30c25179c&"
                className="object-cover absolute inset-0 size-full"
              />
              <div className="flex relative flex-col mt-44 max-w-full w-[289px] max-md:mt-10">
                <div className="flex overflow-hidden relative flex-col px-9 py-11 w-full text-xs whitespace-nowrap aspect-[1.17] fill-white max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f79c432a8b19e0c699f1d4543cfe55f98f51dd1d7f649b6b993199cb4387b25f?apiKey=61ff43272a5b46609e5949f30c25179c&"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/04da0399be8319bf46496b97e42fe4bf50a2ece663692e25fd27525e402ae3fa?apiKey=61ff43272a5b46609e5949f30c25179c&"
                    className="self-center mt-7 mb-8 max-w-full aspect-[4.35] w-[130px]"
                  />
                </div>
                <div className="self-center mt-14 text-2xl leading-6 text-center text-white max-md:mt-10">
                  Welcome
                </div>
                <div className="mt-4 text-xl font-light leading-7 text-center text-violet-300">
                  Connect the world with MyInet
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
    
}


export default LoginComponent


