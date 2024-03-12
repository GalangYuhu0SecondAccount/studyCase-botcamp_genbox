import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/route";
import "./App.css";

function App() {
   return (
      <>
         <div>
            <Suspense fallback={<h3>loading ...</h3>}>
               <RouterProvider router={router} />
            </Suspense>
         </div>
      </>
   );
}

export default App;
