import axios from "axios";
import React, { useEffect, useState } from "react";

function Student() {
  const [data, setData] = useState([]);
  const [classLists, setClassLists] = useState([]);
  const [filterByClass, setFilterByClass] = useState([]);
  const [classDropdownValue, setClassDropdownValue] = useState("");

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
          <form>
            <label for='class'>Choose a class:</label>
            <select
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
        <div>
          {classDropdownValue ? (
            <>
              <div>
                {filterByClass?.map((element, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => {
                        alert("Hello");
                      }}
                    >
                      <div className='shadow-indigo-500/40 p-5 sm:flex sm:justify-between'>
                        <div className='border-2 border-gray-700 p-2 flex justify-center'>
                          <img
                            src={`http://localhost:5000/${element.image}`}
                            alt='flower Image'
                            className='rounded-full w-32 h-32 sm:w-40 sm:h-40 object-fill border-red-900 border-2'
                          />
                        </div>
                        <div className='border-2 border-red-700 p-2'>
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
                        alert("Hello");
                      }}
                    >
                      <div className='shadow-indigo-500/40 p-5 sm:flex sm:justify-between'>
                        <div className='border-2 border-gray-700 p-2 flex justify-center'>
                          <img
                            src={`http://localhost:5000/${element.image}`}
                            alt='flower Image'
                            className='rounded-full w-32 h-32 sm:w-40 sm:h-40 object-fill border-red-900 border-2'
                          />
                        </div>
                        <div className='border-2 border-red-700 p-2'>
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
