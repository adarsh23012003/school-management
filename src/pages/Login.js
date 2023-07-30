import React, { useState } from "react";
import { instance, setToken } from "../Axios/axiosConfig";
import { setCookie } from "../Axios/cookieConfig";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  function handelSubmit() {
    instance
      .post("http://localhost:5000/user/login", formData)
      .then(function (response) {
        // console.log(response.data.token);
        setToken(response.data.token);

        const jwtToken = response.data.token;
        setCookie("token", jwtToken, 1 / 24);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className='bg-gray-200 h-screen'>
      <div className='absolute left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%]'>
        <div className='shadow-red-400 shadow-md p-7 rounded-md'>
          <form action=''>
            <div className='pb-3'>
              <input
                onChange={(e) => {
                  formData.email = e.target.value;
                }}
                required
                className='border focus:border-2 focus:border-blue-400 w-auto sm:w-72 p-2 rounded-md focus:p-2.5 transition-all duration-300 ease-in-out outline-none'
                placeholder='Enter email'
                type='email'
              />
            </div>
            <div className='pb-3'>
              <input
                onChange={(e) => {
                  formData.password = e.target.value;
                }}
                required
                className='border focus:border-2 focus:border-blue-400 w-auto sm:w-72 p-2 rounded-md focus:p-2.5 transition-all duration-300 ease-in-out outline-none'
                placeholder='Enter password'
                type='password'
              />
            </div>
          </form>
          <div className='flex justify-center pt-2'>
            <button
              className='p-1.5 px-4 sm:px-6  bg-blue-500 rounded-md hover:bg-blue-600'
              onClick={() => {
                if (formData.email && formData.password) {
                  handelSubmit();
                }
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
