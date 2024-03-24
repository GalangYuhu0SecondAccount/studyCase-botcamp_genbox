import React, { useState } from "react";

const Login = () => {
   // const [username, setUsername] = useState('');
   // const [password, setPassword] = useState('');

   // const handleUsernameChange = (event) => {
   //   setUsername(event.target.value);
   // };

   // const handlePasswordChange = (event) => {
   //   setPassword(event.target.value);
   // };

   // const handleSubmit = (event) => {
   //   event.preventDefault();
   //   console.log("Username:", username);
   //   console.log("Password:", password);

   return (
      // {/* <div className="bg-white box-border  lg:flex justify-center items-center flex-col  h-screen py-20 max-md:w-auto ">
      //   <div className="bg-white flex justify-center items-center flex-col min-w-[542px] px-8 py-12 box-border shadow-md rounded-lg">
      //     <div className="w-full box-border pb-8">
      //       <div className="flex flex-col gap-4 w-full">
      //         <input placeholder="Username" className="text-lg font-normal text-gray-500 bg-gray-100 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      //         <input placeholder="Password" type="password" className="text-lg font-normal text-gray-500 bg-gray-100 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      //       </div>
      //       <button className="bg-blue-500 text-white text-lg font-normal py-4 px-6 rounded-lg mt-8 w-full hover:bg-blue-600">
      //         Login
      //       </button>
      //     </div>
      //     <p className="text-gray-600 mt-8">
      //       <span className="text-lg font-normal">Belum punya akun?</span>
      //       <span className="text-lg font-normal text-blue-500 cursor-pointer ml-1">Daftar</span>
      //     </p>
      //   </div>
      // </div> */}

      // {/* <div className="bg-white box-border lg:flex justify-center items-center flex-col h-screen py-20 max-md:w-auto">
      //   <div className="bg-white flex justify-center items-center flex-col min-w-0 lg:min-w-[542px] px-8 py-12 box-border shadow-md rounded-lg">
      //     <div className="w-full box-border pb-8">
      //       <div className="flex flex-col gap-4 w-full">
      //         <input placeholder="Username" className="text-lg font-normal text-gray-500 bg-gray-100 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      //         <input placeholder="Password" type="password" className="text-lg font-normal text-gray-500 bg-gray-100 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      //       </div>
      //       <button className="bg-blue-500 text-white text-lg font-normal py-4 px-6 rounded-lg mt-8 w-full hover:bg-blue-600">
      //         Login
      //       </button>
      //     </div>
      //     <p className="text-gray-600 mt-8">
      //       <span className="text-lg font-normal">Belum punya akun?</span>
      //       <span className="text-lg font-normal text-blue-500 cursor-pointer ml-1">Daftar</span>
      //     </p>
      //   </div>
      // </div> */}
      <div className=" flex flex-col box-border lg:flex justify-center items-center h-screen py-20   ">
         <div className="w-full max-md:w-auto">
            <div className="h-20vh m-30 rounded flex flex-col justify-center items-center">
               <form className=" bg-slate-200 flex justify-center items-center flex-col min-w-0 lg:min-w-[542px] px-8 py-12 box-border shadow-md rounded-lg">
                  <div className="w-full">
                     <label>
                        <input
                           type="text"
                           placeholder="Username"
                           className="outline-none bg-transparent block w-full mt-10 pb-1 border-b border-solid border-black text-center mb-20"
                        />
                     </label>
                     <label>
                        <input
                           type="password"
                           placeholder="Password"
                           className=" outline-none bg-transparent block w-full mt-10 pb-1 border-b border-solid border-black text-center mb-20"
                        />
                     </label>
                  </div>
                  <button
                     type="button"
                     className="submit  bg-blue-500 text-black text-15 font-normal py-4 px-6 rounded-lg w-60 hover:bg-button-colot-hover"
                  >
                     Login
                  </button>
               </form>
               <div className="mt-8">
                  <p className="text-13 text-black font-Cocogoose font-light">
                     belum punya akun ?{" "}
                     <a href="#" className="text-blue-500">
                        Daftar
                     </a>
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
