import { TextField } from '@mui/material';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const LogIn = () => {


    const { singWithGoogle, logIn } = useContext(AuthContext);
    const { reset,register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogIN =data=>{
        console.log(data);
        const {Email,password}=data;
        logIn(Email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true });
            
        })
        .catch(error=>console.error(error));
        reset();
    }


    ////////////Google Pop Login//////////////
    const googleSingIN=()=>{
        singWithGoogle()
        .then(result=>{
            const user = result.user;
            console.log(user);
            reset();
            navigate(from, { replace: true });
                     
        })
        .catch(err =>{
            console.error(err);
       });
    }


    return (
        <div style={{background:'#fff', height:'1000px'}}>

{/* max-w-screen-lg mx-auto */}
            <div style={{}}  className="h-full">
            
                <div  className="container px-6 py-12 h-full mx-auto">
                    <div  className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800 max-w-screen-lg mx-auto">
                        <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="w-full" alt="" srcSet="" />
                            {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="w-full" /> */}
                        </div>
                       
                        <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                       
                            <form onSubmit={handleSubmit(handleLogIN)}>
                                {/* <!-- Email input --> */}
                                <p className="mb-10 text-center text-3xl font-bold ">If you Login You Can add Post</p>
                                <div className="mb-6">
                                <TextField   {...register("Email")} fullWidth id="outlined-basic" label="Your name" variant="outlined" />
                                </div>

                                {/* <!-- Password input --> */}
                                <div className="mb-6">
                                <TextField {...register("password")} fullWidth id="outlined-basic" label="Password" variant="outlined" />
                                </div>

                                <div className="flex justify-between items-center mb-6">

                       
                                  

                                    
                                </div>

                                {/* <!-- Submit button --> */}
                                <button
                                    type="submit"
                                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                >
                                   Log in
                                </button>

                                <div
                                    className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                                >
                                    <p className="text-center font-semibold mx-4 mb-0">OR</p>
                                </div>



                             


                                <div
                                    className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
                                    style={{ backgroundColor: "#34A853" }}
                                    href="#!"
                                    role="button"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    onClick={googleSingIN}
                                >
                                    {/* <!-- Twitter --> */}
                                    Continue with Google
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default LogIn;