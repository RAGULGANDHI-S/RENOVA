import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

const NotFound = () => {

  return (

    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6">

      <Card className="max-w-md w-full text-center p-10">

        <h1 className="text-7xl font-black text-emerald-400">
          404
        </h1>


        <h2 className="text-2xl font-bold mt-4">
          Page Not Found
        </h2>


        <p className="text-slate-400 mt-3">
          Sorry, the page you are looking for does not exist.
        </p>


        <Link to="/">
          
          <Button className="mt-6">
            Go Back Home
          </Button>

        </Link>


      </Card>

    </div>

  );

};


export default NotFound;