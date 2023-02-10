import React, { useEffect, useState } from "react";
import Navbar from "./component/navbar";
import api from "./component/api.json";
import Error from "./component/Error";
import Home from "./component/Home";
import Contact from "./component/Contact";
import Login from "./component/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  // const [first, setfirst] = useState([]);

  // useEffect(() => {
  // async function fetchdata(){
  //          const resp =await fetch("https://newsapi.org/v2/everything?q=Apple&from=2023-02-10&sortBy=popularity&apiKey=2fa1039c7cbe45baa0f93b35233a6252");
  //          const data =await resp.json();
  //            setfirst(data.articles);
  // }

  // fetchdata();

  // }, []);

  // console.log(first);

  return (
    <>
          <Router>
            <Routes>
            <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<Navbar/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="*" element={<Error/>}/>
            </Routes>
          </Router>










      {/* <div className="grid gap-2 lg:grid-cols-4">
                {first.map((items, key) => (
                    <div className="w-full rounded-lg shadow-md lg:max-w-sm" key={key}>
                        <img
                            className="object-cover w-full h-48"
                            src={items.urlToImage}
                            alt="image"
                        />
                        <div className="p-4">
                            <h4 className="text-xl font-semibold text-blue-600">
                                
                                {items.title}
                            </h4>
                            <p className="mb-2 leading-normal">
                            {items.content}
                            </p>
                           <a href={items.url}> <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                                Read more
                            </button></a>
                        </div>
                    </div>
                ))}
            </div> */}
    </>
  );
};

export default App;
