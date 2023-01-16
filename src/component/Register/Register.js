
import { Box, TextField } from '@mui/material';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Register = () => {

    const { createUser, singWithGoogle } = useContext(AuthContext);
    const { reset, register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleRegister = data => {

        createUser(data.Email, data.Password)
            .then(result => {
                const user = result.user;
                console.log(user);
                reset();
            })
            .catch(err => {
                console.log(err);
            })
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
        <div style={{background:'#fff'}}>
            <div style={{ minHeight:'1000px' }} className="h-full gradient-form bg-gray-200 md:h-screen">
                <div className="container py-12 px-6 h-full mx-auto">
                    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                        <div className="xl:w-10/12">
                            <div className="block bg-white shadow-lg rounded-lg">
                                <div className="lg:flex lg:flex-wrap g-0">
                                    <div className="lg:w-6/12 px-4 md:px-0">
                                        <div className="md:p-12 md:mx-6">
                                            <div className="text-center">
                                                <img
                                                    className="mx-auto w-48"
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                                    alt="logo"
                                                />
                                                <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">We are The Lotus Team</h4>
                                            </div>


                                            <form onSubmit={handleSubmit(handleRegister)}>
                                                <p className="mb-4">Please register  to Login</p>
                                                <div className="mb-4">
                                                    {/* <input
                                                        type="text"
                                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                        id="exampleFormControlInput1"
                                                        placeholder="Username"
                                                    /> */}
                                                    <TextField {...register("Email")} fullWidth id="outlined-basic" label="Enter your email" variant="outlined" />
                                                </div>
                                                <div className="mb-4">
                                                    {/* <input
                                                        type="password"
                                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                        id="exampleFormControlInput1"
                                                        placeholder="Password"
                                                    /> */}
                                                    <TextField {...register("Password")} fullWidth id="outlined-basic" label="Enter vaild password" variant="outlined" />
                                                </div>
                                                <div className="text-center pt-1 mb-12 pb-1">
                                                    <button
                                                        className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                                                        type="submit"
                                                        data-mdb-ripple="true"
                                                        data-mdb-ripple-color="light"
                                                        style={{
                                                            background: "linear-gradient( to right,  #ee7724, #d8363a,#dd3675, #b44593)"
                                                        }}

                                                    >
                                                        Register
                                                    </button>
                                                    {/* <a className="text-gray-500" href="#!">Forgot password?</a> */}
                                                </div>
                                                <div className="flex items-center justify-between pb-6">
                                                    <p className="mb-0 mr-2"> Have an account?</p>
                                                    <Link to={'/login'}
                                                        type="button"
                                                        className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                                        data-mdb-ripple="true"
                                                        data-mdb-ripple-color="light"
                                                    >
                                                        Log In
                                                    </Link>
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
                                    <Box
                                        className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none mt-12"
                                        sx=
                                        {{
                                            background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                                            
                                        }}

                                    >
                                        <div className="text-white px-4 py-6 md:p-12 md:mx-32">
                                            <h4 className="text-xl font-semibold mb-6">We are more than just a company</h4>
                                            <p className="text-sm">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                consequat.
                                            </p>
                                        </div>
                                    </Box>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;