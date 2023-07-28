import React, { useState } from "react";
import { instance } from "../Axios/axiosConfig";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  function handelSubmit() {
    instance
      .post("http://localhost:5000/user/login", formData)
      .then(function (response) {
        console.log(response.data.token);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className='flex justify-center pt-5'>
      <div className=' border border-red-400 p-7 rounded-md'>
        <form action=''>
          <div className='pb-3'>
            <input
              onChange={(e) => {
                formData.email = e.target.value;
              }}
              required
              className='border focus:outline-blue-400 p-2 rounded-md'
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
              className='border focus:outline-blue-400 p-2 rounded-md'
              placeholder='Enter password'
              type='password'
            />
          </div>
        </form>
        <div className='flex justify-center pt-2'>
          <button
            className='p-1.5 bg-blue-500 rounded-md hover:bg-blue-600'
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
  );
}

export default Login;
