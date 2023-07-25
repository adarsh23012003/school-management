import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function StudentDetails() {
  const [data, setData] = useState({});
  const { studentId } = useParams();

  useEffect(() => {
    function StudentDetail() {
      axios
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
      <div>
        <img
          className='rounded-full w-32 h-32 sm:w-40 sm:h-40 object-fill'
          src={`http://localhost:5000/${data.image}`}
          alt='Image'
        />
        <ul>
          <li>{data.fullName}</li>
          <li>{data.fatherName}</li>
          <li>{data.motherName}</li>
          <li>{data.address}</li>
          <li>{data.email}</li>
          <li>{data.mobileNumber}</li>
          <li>{data.dob}</li>
          <li>{data.category}</li>
          <li>{data.gender}</li>
          <li>{data.studentClass}</li>
        </ul>
      </div>
    </div>
  );
}

export default StudentDetails;
