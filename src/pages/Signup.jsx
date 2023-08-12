import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import { useState } from "react";
import { toast } from "react-hot-toast";

const auth = getAuth(app);

const Signup = () => {
  const initialVAlue = {
    email: "",
    password: "",
  };

  const [formdata, setFormdata] = useState(initialVAlue);

  function handlechange(e) {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
    //  console.log(formdata);
  }
  console.log(formdata);

  const signupUser = () => {
    createUserWithEmailAndPassword(auth, formdata.email, formdata.password).then(
      (res) => {
        console.log("value: ", res)
      console.log(formdata);
      toast.success("Signup successfully!");}
      
    ).catch((error) => {
      console.log(error);
      console.log(error.message);
      toast.error(error.code)
    })
    
  };
  return (
    <>
      <div className=" w-full h-screen flex justify-center items-center mx-auto bg-gray-200">
        <div className="   flex flex-col justify-center  gap-3 rounded-md shadow-2xl px-4 md:px-12  py-14 bg-white">
          <h1 className="text-center font-bold text-2xl">Sign up</h1>
          <div className="flex flex-col gap-5 mt-4">
            <label className="flex flex-col gap-1">
              <span className="block text-sm md:text-md font-medium text-slate-700">
                Email:
              </span>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter you email"
                className=" w-full h-[3rem]  mt-1 px-3 py-4 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none block font-medium   focus:ring-gray-300  rounded-md sm:text-sm focus:ring-1 hover:border-2 "
                value={formdata?.email}
                onChange={handlechange}
                required
              />
              
            </label>

            <label className="flex flex-col gap-1">
              <span className="block text-sm md:text-md font-medium text-slate-700">
                Password
              </span>
              <input
                type="password"
                name="password"
                id="password "
                placeholder="**************"
                required
                value={formdata?.password}
                onChange={handlechange}
                className=" w-full h-[3rem]  mt-1 px-3 py-4 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none block font-medium   focus:ring-gray-300  rounded-md sm:text-sm focus:ring-1 hover:border-2 "
              />
              
            </label>

            <button
              onClick={signupUser}
              className="border py-2 rounded-xl text-lg bg-blue-600 hover:bg-blue-800 text-gray-300 uppercase"
            >
              Create User
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
