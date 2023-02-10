import React from "react";

import { Link,useNavigate } from "react-router-dom";

const Home = ({}) => {
  const navigate = useNavigate();

  function login(){
    navigate("/login")
  }
  return (
    <>
      <div className="body bg-blue-700 w-[100%] h-[100vh]">
        <div>
          <nav className="flex list-none px-[45rem]">
            <Link to="/">
           
              <li className="m-4">Home</li>
            </Link>
            <Link to="/about">
            
              <li className="m-4">About</li>
            </Link>
            <Link to="/contact">
            
              <li className="m-4">Contactus</li>
            </Link>
          </nav>  
        </div>
    
    <form className="bg-gray-800 w-[13rem] h-[16rem] ml-[19rem] mt-[3rem]">

        <input type="text" className=" mt-5 ml-3 rounded-sm"/>
        <input type="text" className=" mt-5 ml-3 rounded-sm"/>
        <input type="text" className=" mt-5 ml-3 rounded-sm"/>
        <button   onClick={login}  className=" bg-black rounded-lg text-white font-extrabold ml-[3.5rem] mt-[2rem]">Register</button>
    </form>

      </div>
    </>
  );
};

export default Home;
