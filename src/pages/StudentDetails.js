import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { instance } from "../Axios/axiosConfig";

function StudentDetails() {
  const [data, setData] = useState({});
  const { studentId } = useParams();

  useEffect(() => {
    function StudentDetail() {
      instance
        .get(`http://localhost:5000/student/${studentId}`)
        .then(function (response) {
          setData(response.data.student);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    StudentDetail();
  }, []);

  return (
    <div className='flex justify-center'>
      <div className='border-2 p-10 shadow-lg shadow-blue-600'>
        <div className='flex justify-center pb-3'>
          <img
            className='rounded-md w-32 h-32 sm:w-40 sm:h-40 object-fill'
            src={data.image}
            alt='Image'
          />
        </div>
        <ul className='text-center font-bold'>
          <li>
            Student Name -: <span className='font-normal'>{data.fullName}</span>
          </li>
          <li>
            Father Name -:{" "}
            <span className='font-normal'>{data.fatherName}</span>
          </li>
          <li>
            Mother Name -:{" "}
            <span className='font-normal'>{data.motherName}</span>
          </li>
          <li>
            Address -: <span className='font-normal'>{data.address}</span>
          </li>
          <li>
            Date -: <span className='font-normal'>{data.email}</span>
          </li>
          <li>
            Mobile number -:{" "}
            <span className='font-normal'>{data.mobileNumber}</span>
          </li>
          <li>
            Dob -: <span className='font-normal'>{data.dob}</span>
          </li>
          <li>
            Date -: <span className='font-normal'>{data.category}</span>
          </li>
          <li>
            Gender -: <span className='font-normal'>{data.gender}</span>
          </li>
          <li>
            Class Name -:{" "}
            <span className='font-normal'>{data.studentClass}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default StudentDetails;
