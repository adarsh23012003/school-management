import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Student() {
  const [data, setData] = useState([]);
  const [classLists, setClassLists] = useState([]);
  const [filterByClass, setFilterByClass] = useState([]);
  const [classDropdownValue, setClassDropdownValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    function getData() {
      axios
        .get("http://localhost:5000/student")
        .then(function (response) {
          // console.log(response.data);
          setData(response.data.student);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    getData();
  }, []);

  useEffect(() => {
    function classLists() {
      axios
        .get("http://localhost:5000/student/classes")
        .then(function (response) {
          // console.log(response.data);
          setClassLists(response.data.studentClassList);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    classLists();
  }, []);

  useEffect(() => {
    if (classDropdownValue) {
      function filterByClass() {
        axios
          .get(
            `http://localhost:5000/student/filterByClass/${classDropdownValue}`
          )
          .then(function (response) {
            setFilterByClass(response.data.filterByClassData);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      filterByClass();
    }
  }, [classDropdownValue]);

  return (
    <>
      <div className='flex justify-center'>
        <div>
          {/* ************* Dropdown **************** */}
          <div className='flex justify-center p-5'>
            <form>
              <label for='class'>Choose a class:</label>
              <select
                className='border-2 rounded-md p-0.5 focus:outline-blue-400'
                name='class'
                id='class'
                onChange={(e) => {
                  setClassDropdownValue(e.target.value);
                }}
                defaultValue=''
              >
                <option value=''>Select</option>
                {classLists.map((element) => {
                  return (
                    <>
                      <option value={element}>{element}</option>
                    </>
                  );
                })}
              </select>
            </form>
          </div>

          {classDropdownValue ? (
            <>
              <div>
                {filterByClass?.map((element, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => {
                        navigate(`${element._id}`);
                      }}
                    >
                      <div>
                        <div className='shadow-lg shadow-indigo-500/40 p-2 sm:flex sm:justify-between border-2 mb-5'>
                          <div className='p-2 flex justify-center'>
                            <img
                              src={`http://localhost:5000/${element.image}`}
                              alt='flower Image'
                              className='rounded-full w-32 h-32 sm:w-32 sm:h-w-32 object-fill'
                            />
                          </div>
                          <div className='p-2'>
                            <div className='text-center items-center'>
                              <h1 className='font-semibold'>
                                {element.fullName}
                              </h1>
                              <p className='pt-2 text-sm'>
                                {`${element.address.slice(0, 10)}...`}
                              </p>
                            </div>
                            <div className='flex justify-between text-center'>
                              <table className='p-1 border text-sm'>
                                <tr>
                                  <td className='border'>
                                    Gender
                                    <p className='pt-2 text-xs'>
                                      {element.gender}
                                    </p>
                                  </td>
                                </tr>
                              </table>
                              <table className='p-1 border text-sm'>
                                <tr>
                                  <td className=' border'>
                                    class
                                    <p className='pt-2 text-xs'>
                                      {element.studentClass}
                                    </p>
                                  </td>
                                </tr>
                              </table>
                              <table className='p-1 border text-sm'>
                                <tr>
                                  <td className='border'>
                                    Gender
                                    <p className='pt-2 text-xs'>
                                      {element.category}
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <>
              <div>
                {data?.map((element, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => {
                        navigate(`${element._id}`);
                      }}
                    >
                      <div>
                        <div className='shadow-lg shadow-indigo-500/40 p-2 sm:flex sm:justify-between border-2 mb-5'>
                          <div className='p-2 flex justify-center'>
                            <img
                              src={`http://localhost:5000/${element.image}`}
                              alt='flower Image'
                              className='rounded-full w-32 h-32 sm:w-32 sm:h-w-32 object-fill'
                            />
                          </div>
                          <div className='p-2'>
                            <div className='text-center items-center'>
                              <h1 className='font-semibold'>
                                {element.fullName}
                              </h1>
                              <p className='pt-2 text-sm'>
                                {`${element.address.slice(0, 10)}...`}
                              </p>
                            </div>
                            <div className='flex justify-between text-center'>
                              <table className='p-1 border text-sm'>
                                <tr>
                                  <td className='border'>
                                    Gender
                                    <p className='pt-2 text-xs'>
                                      {element.gender}
                                    </p>
                                  </td>
                                </tr>
                              </table>
                              <table className='p-1 border text-sm'>
                                <tr>
                                  <td className=' border'>
                                    class
                                    <p className='pt-2 text-xs'>
                                      {element.studentClass}
                                    </p>
                                  </td>
                                </tr>
                              </table>
                              <table className='p-1 border text-sm'>
                                <tr>
                                  <td className='border'>
                                    Gender
                                    <p className='pt-2 text-xs'>
                                      {element.category}
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Student;
