import axios from "axios";
import React, { useState, useRef } from "react";
import { TbFileUpload } from "react-icons/tb";
import Compressor from "compressorjs";

function Home() {
  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    motherName: "",
    address: "",
    email: "",
    mobileNumber: "",
    dob: "",
    category: "",
    gender: "",
    class: "",
    // Image: "",
  });
  const inputRef = useRef(null);
  const handelSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/student/register", formData)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const convertFile = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  return (
    <>
      <div className='text-center pt-10 pb-5 text-3xl font-bold'>
        Student Registration
      </div>
      <div className='flex justify-center'>
        <div
          className=' sm:flex sm:justify-between inline-block justify-center 
         rounded-sm'
        >
          {/* ******************** Input forms *********************** */}
          <div className='p-5 shadow-lg font-medium'>
            <form action=''>
              <div className='flex justify-between pb-5'>
                <label htmlFor='Enter your name'>Full Name :-</label>
                <input
                  onChange={(e) => {
                    formData.fullName = e.target.value;
                  }}
                  type='text'
                  className='bg-gray-100 border-2 rounded-md outline-none focus:border-blue-500 focus:p-0.5 transition-all duration-[0.3s] ease-in-out'
                />
              </div>
              <div className='flex justify-between pb-5'>
                <label htmlFor='Father Name'>Father Name :-</label>
                <input
                  onChange={(e) => {
                    formData.fatherName = e.target.value;
                  }}
                  type='text'
                  className='bg-gray-100 border-2 rounded-md outline-none focus:border-blue-500 focus:p-0.5 transition-all duration-[0.3s] ease-in-out'
                />
              </div>
              <div className='flex justify-between pb-5'>
                <label htmlFor='Mother Name'>Mother Name :-</label>
                <input
                  onChange={(e) => {
                    formData.motherName = e.target.value;
                  }}
                  type='text'
                  className='bg-gray-100 border-2 rounded-md outline-none focus:border-blue-500 focus:p-0.5 transition-all duration-[0.3s] ease-in-out'
                />
              </div>
              <div className='flex justify-between pb-5'>
                <label htmlFor='Address'>Address :-</label>
                <textarea
                  onChange={(e) => {
                    formData.address = e.target.value;
                  }}
                  type='text'
                  className='bg-gray-100 border-2 rounded-md outline-none focus:border-blue-500 focus:p-0.5 transition-all duration-[0.3s] ease-in-out'
                />
              </div>
              <div className='flex justify-between pb-5'>
                <label htmlFor='Email'>Email :-</label>
                <input
                  onChange={(e) => {
                    formData.email = e.target.value;
                  }}
                  type='email'
                  className='bg-gray-100 border-2 rounded-md outline-none focus:border-blue-500 focus:p-0.5 transition-all duration-[0.3s] ease-in-out'
                />
              </div>
              <div className='flex justify-between pb-5'>
                <label htmlFor='Mobile'>Mobile :-</label>
                <input
                  onChange={(e) => {
                    formData.mobileNumber = e.target.value;
                  }}
                  type='text'
                  className='bg-gray-100 border-2 rounded-md outline-none focus:border-blue-500 focus:p-0.5 transition-all duration-[0.3s] ease-in-out'
                />
              </div>
              <div className='flex justify-between pb-5'>
                <label htmlFor='DOB'>DOB :-</label>
                <input
                  onChange={(e) => {
                    formData.dob = e.target.value;
                  }}
                  type='date'
                  className='bg-gray-100 border-2 rounded-md outline-none focus:border-blue-500 focus:p-0.5 transition-all duration-[0.3s] ease-in-out'
                />
              </div>
              <div className='flex justify-between pb-5'>
                <label htmlFor='Category'>Category :-</label>
                <input
                  onChange={(e) => {
                    formData.category = e.target.value;
                  }}
                  type='text'
                  className='bg-gray-100 border-2 rounded-md outline-none focus:border-blue-500 uppercase focus:p-0.5 transition-all duration-[0.3s] ease-in-out'
                />
              </div>
              <div
                className='flex justify-between pb-5'
                onChange={(e) => {
                  formData.gender = e.target.value;
                }}
              >
                <label for='gender'>gender:-</label>
                <div className='flex gap-2'>
                  <input type='radio' name='gender' value='Male'></input>
                  <label for='Male'>Male</label>
                  <input type='radio' name='gender' value='Female'></input>
                  <label for='Female'>Female</label>
                </div>
              </div>
              <div className='flex justify-between pb-5'>
                <label htmlFor='Class'>Class :-</label>
                <input
                  onChange={(e) => {
                    formData.class = e.target.value;
                  }}
                  type='text'
                  className='bg-gray-100 border-2 rounded-md outline-none focus:border-blue-500 focus:p-0.5 transition-all duration-[0.3s] ease-in-out'
                />
              </div>
            </form>
          </div>
          <div>
            {/* ******************* Photo ********************** */}
            <div className='flex justify-center pt-3 sm:pt-0'>
              {/* Upload Image */}
              <div
                className='border-2 border-blue-400 p-10 cursor-pointer'
                onClick={() => {
                  inputRef.current.click();
                }}
              >
                <TbFileUpload size={30} />
              </div>
              <input
                className='hidden'
                ref={inputRef}
                type='file'
                onChange={async (e) => {
                  const base64 = await convertFile(e.target.files[0]);
                  new Compressor(e.target.files[0], {
                    quality: 0.8, // 0.6 can also be used, but its not recommended to go below.
                    success: (compressedResult) => {
                      // compressedResult has the compressed file.
                      console.log(compressedResult);
                      // Use the compressed file to upload the images to your server.
                      formData.Image = compressedResult;
                      // setCompressedFile(res);
                    },
                  });
                  // formData.Image = base64;
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center p-5'>
        <button
          className='p-1.5 px-10 sm:px-0 bg-green-500 rounded-md hover:bg-green-600 w-auto sm:w-[18%]'
          onClick={(e) => {
            handelSubmit(e);
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default Home;
