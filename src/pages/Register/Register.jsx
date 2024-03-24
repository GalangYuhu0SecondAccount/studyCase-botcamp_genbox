import React from "react";

const Register = () => {
   return (
      <div className="bg-white box-border lg:flex justify-center items-center flex-col min-h-screen py-20">
         <div className="w-full lg:w-1/2 p-4">
            <div className="card card-side bg-base-100 shadow-xl">
               <figure className="">
                  {/* hidden images */}
                  <img
                     src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                     alt="Movie"
                     className="w-full h-[73vh] object-cover hidden md:block"
                  />
               </figure>
               <div className="card-body p-6">
                  <h2 className="text-2xl font-semibold mb-4">Daftar</h2>
                  <form action="">
                     <div className="mb-4">
                        <label for="username" className="block mb-1">
                           Username
                        </label>
                        <input
                           type="text"
                           id="username"
                           placeholder="username"
                           className="w-full p-2 border rounded"
                        />
                     </div>
                     <div className="mb-4">
                        <label for="email" className="block mb-1">
                           Email
                        </label>
                        <input
                           type="text"
                           id="email"
                           placeholder="Email"
                           className="w-full p-2 border rounded"
                        />
                     </div>
                     <div className="mb-4">
                        <label for="password" className="block mb-1">
                           Password
                        </label>
                        <input
                           type="password"
                           id="password"
                           placeholder="Password"
                           className="w-full p-2 border rounded"
                        />
                     </div>
                     <div className="mb-4">
                        <label for="confirmPassword" className="block mb-1">
                           Confirmasi Password
                        </label>
                        <input
                           type="password"
                           id="confirmPassword"
                           placeholder="Confirmasi Password"
                           className="w-full p-2 border rounded"
                        />
                     </div>
                     <div className="mb-4">
                        <input
                           type="checkbox"
                           id="agreeTerms"
                           name="agreeTerms"
                           className="mr-2"
                        />
                        <label for="agreeTerms">
                           Saya menyetujui syarat dan ketentuan
                        </label>
                     </div>
                     <div className="flex justify-end">
                        <button className="btn btn-primary">Register</button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
      // {/* <div className="bg-white box-border lg:flex justify-center items-center flex-col h-screen py-20">
      // <div className="hidden md:block">
      //     <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" className="w-full h-[58vh]" />
      // </div>
      // <div className="md:hidden">
      //     <div className="card card-side bg-base-100 shadow-xl">
      //         <div className="card-body p-6">
      //             <h2 className="text-2xl font-semibold mb-4">Daftar</h2>
      //             <form action="">
      //                 <div className="mb-4">
      //                     <label for="username" className="block mb-1">Username</label>
      //                     <input type="text" id="username" placeholder="username" className="w-full p-2 border rounded" />
      //                 </div>
      //                 <div className="mb-4">
      //                     <label for="email" className="block mb-1">Email</label>
      //                     <input type="text" id="email" placeholder="Email" className="w-full p-2 border rounded" />
      //                 </div>
      //                 <div className="mb-4">
      //                     <label for="password" className="block mb-1">Password</label>
      //                     <input type="password" id="password" placeholder="Password" className="w-full p-2 border rounded" />
      //                 </div>
      //                 <div className="mb-4">
      //                     <label for="confirmPassword" className="block mb-1">Confirmasi Password</label>
      //                     <input type="password" id="confirmPassword" placeholder="Confirmasi Password" className="w-full p-2 border rounded" />
      //                 </div>
      //                 <div className="mb-4">
      //                     <input type="checkbox" id="agreeTerms" name="agreeTerms" className="mr-2" />
      //                     <label for="agreeTerms">Saya menyetujui syarat dan ketentuan</label>
      //                 </div>
      //                 <div className="flex justify-end">
      //                     <button className="btn btn-primary">Register</button>
      //                 </div>
      //             </form>
      //         </div>
      //     </div>
      // </div>
      // </div> */}
   );
};

export default Register;
