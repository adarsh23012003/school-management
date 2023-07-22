import axios from "axios";
import React, { useEffect, useState } from "react";

function About() {
  const [data, setData] = useState([]);
  useEffect(() => {
    function getData() {
      axios
        .get("http://localhost:5000/")
        .then(function (response) {
          console.log(response.data);
          setData(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    getData();
  }, []);
  return (
    <>
      <div className='flex justify-center'>
        {data.length && (
          <>
            <div>
              {data.map((element, index) => {
                return (
                  <div key={index}>
                    <div className='shadow-indigo-500/40 p-5 sm:flex sm:justify-between'>
                      <div className='border-2 border-gray-700 p-2 flex justify-center'>
                        <img
                          src=''
                          alt='flower Image'
                          className='rounded-full w-32 h-32 sm:w-40 sm:h-40 object-fill border-red-900 border-2'
                        />
                      </div>
                      <div className='border-2 border-red-700 p-2'>
                        {/* <div className=""> */}

                        <div className='text-center items-center'>
                          <h1 className='font-semibold'>Student Name</h1>
                          <p className='pt-2 text-sm'>Address</p>
                        </div>
                        <div className='flex justify-between text-center'>
                          <table className='p-1 border text-sm'>
                            <tr>
                              <td className='border'>
                                Gender
                                <p className='pt-2 text-xs'>Male</p>
                              </td>
                            </tr>
                          </table>
                          <table className='p-1 border text-sm'>
                            <tr>
                              <td className=' border'>
                                class
                                <p className='pt-2 text-xs'>12</p>
                              </td>
                            </tr>
                          </table>
                          <table className='p-1 border text-sm'>
                            <tr>
                              <td className='border'>
                                Gender
                                <p className='pt-2 text-xs'>Category</p>
                              </td>
                            </tr>
                          </table>
                        </div>
                        {/* </div> */}
                      </div>
                    </div>
                    {/* <div className='border-2 border-red-600 m-5'>
                      <h1>Name -:{element.FullName}</h1>
                      <h2>Class -:{element.Class}</h2>
                      <h2>Gender -:{element.Gender}</h2>
                      <img src={element.Image && element.Image} alt='Image' />
                    </div> */}
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default About;
