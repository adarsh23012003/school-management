import React, { useState, useRef } from "react";
import { TbFileUpload } from "react-icons/tb";

function Home() {
  const [formData, setFormData] = useState({
    FullName: "",
    FatherName: "",
    MotherName: "",
    Address: "",
    Email: "",
    MobileNumber: "",
    DOB: "",
    Category: "",
    Gender: "",
    Class: "",
  });
  const [fileUpload, setFileUpload] = useState("");
  const inputRef = useRef(null);
  return (
    <>
      <div className='text-center pt-10 pb-5 text-3xl font-bold'>
        Student Registration
      </div>
      <div className='flex justify-center'>
        <form action=''>
          <div className='flex gap-5'>
            <label htmlFor='Enter your name'>Full Name :-</label>
            <input
              onChange={(e) => {
                formData.FullName = e.target.value;
              }}
              type='text'
              className='bg-gray-100 border-2 rounded-md outline-none focus:border-blue-500'
            />
          </div>
          <div className='flex gap-5'>
            <label htmlFor='Father Name'>Father Name :-</label>
            <input
              onChange={(e) => {
                formData.FatherName = e.target.value;
              }}
              type='text'
              className='bg-gray-100 border-2 rounded-md outline-none focus:border-blue-500'
            />
          </div>
          <div className='flex gap-5'>
            <label htmlFor='Mother Name'>Mother Name :-</label>
            <input
              onChange={(e) => {
                formData.MotherName = e.target.value;
              }}
              type='text'
              className='bg-gray-100 border-2 rounded-md outline-none focus:border-blue-500'
            />
          </div>
          <div className='flex gap-5'>
            <label htmlFor='Address'>Address</label>
            <textarea
              onChange={(e) => {
                formData.Address = e.target.value;
              }}
              type='text'
              className='bg-gray-100 border-2 rounded-md outline-none focus:border-blue-500'
            />
          </div>
          <div className='flex gap-5'>
            <label htmlFor='Email'>Email :-</label>
            <input
              onChange={(e) => {
                formData.Email = e.target.value;
              }}
              type='email'
              className='bg-gray-100 border-2 rounded-md outline-none focus:border-blue-500'
            />
          </div>
          <div className='flex gap-5'>
            <label htmlFor='Mobile'>Mobile :-</label>
            <input
              onChange={(e) => {
                formData.MobileNumber = e.target.value;
              }}
              type='number'
              className='bg-gray-100 border-2 rounded-md outline-none focus:border-blue-500'
            />
          </div>
          <div className='flex gap-5'>
            <label htmlFor='DOB'>DOB :-</label>
            <input
              onChange={(e) => {
                formData.DOB = e.target.value;
              }}
              type='date'
              className='bg-gray-100 border-2 rounded-md outline-none focus:border-blue-500'
            />
          </div>
          <div className='flex gap-5'>
            <label htmlFor='Category'>Category :-</label>
            <input
              onChange={(e) => {
                formData.Category = e.target.value;
              }}
              type='text'
              className='bg-gray-100 border-2 rounded-md outline-none focus:border-blue-500'
            />
          </div>
          <div
            className='flex gap-5'
            onChange={(e) => {
              formData.Gender = e.target.value;
            }}
          >
            <label for='gender'>gender:-</label>
            <input type='radio' name='gender' value='Male'></input>
            <label for='Male'>Male</label>
            <input type='radio' name='gender' value='Female'></input>
            <label for='Female'>Female</label>
          </div>
          <div className='flex gap-5'>
            <label htmlFor='Class'>Class :-</label>
            <input
              onChange={(e) => {
                formData.Class = e.target.value;
              }}
              type='number'
              className='bg-gray-100 border-2 rounded-md outline-none focus:border-blue-500'
            />
          </div>
          <div
            className=''
            onClick={() => {
              inputRef.current.click();
            }}
          >
            {fileUpload ? (
              <img
                src={fileUpload && URL.createObjectURL(fileUpload)}
                alt='Image'
                className='w-36 h-40'
              />
            ) : (
              <div className='border-2 border-red-400 w-36 h-40'>
                <div className='text-center'>
                  {/* Upload Image */}
                  <TbFileUpload
                    //  className='text-center'
                    size={150}
                  />
                  <input
                    className='hidden'
                    ref={inputRef}
                    type='file'
                    onChange={(e) => {
                      setFileUpload(e.target.files[0]);
                    }}
                  />
                </div>
              </div>
            )}
          </div>
          <button
            className='p-1.5 bg-green-500 rounded-md hover:bg-green-600'
            onClick={() => {
              // alert(formData);
              console.log(formData);
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Home;
