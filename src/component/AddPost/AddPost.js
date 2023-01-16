import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';

const AddPost = () => {
    const { user } = useContext(AuthContext);
    const [loadingBtn, setLoadingBtn] = React.useState(false);
    const { reset, register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();

    const imgHostKey = 'b9cc75dfb9f8d26897e40cb96b3c38cd';
    const from = location.state?.from?.pathname || "/";

    //    const handlePost =(data)=>{
    //     data.authorEmail = user?.email;
    //     console.log(data.Image[0]);

    //    }


    const handlePost = data => {
        setLoadingBtn(true);
        data.authorEmail = user?.email;
        // console.log(data)
        const image = data.Image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                delete data.Image;
                console.log(imgData.data.url);
                const data2 = { ...data, blogPicture: imgData?.data.url, authorPicture: user?.photoURL }
                console.log(data2);
                reset();

                fetch('http://localhost:5000/addpost', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(data2)

                })
                    .then(res => res.json())
                    .then(data => {

                        reset();
                        setLoadingBtn(false);
                        navigate('/blog')
                    })


            })



    };

    return (
        <div>

            <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
                <h1 className="text-xl font-bold text-white capitalize dark:text-white">Add post/blog</h1>
                <form onSubmit={handleSubmit(handlePost)}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-white dark:text-gray-200" for="username"> Full name</label>
                            <input required {...register("author")} id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200" for="emailAddress">Email Address</label>
                            <input required {...register("authorEmail")} defaultValue={user?.email} disabled id="emailAddress" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>



                        <div>
                            <label className="text-white dark:text-gray-200" for="passwordConfirmation">Blog Title</label>
                            <input required {...register("title")} id="passwordConfirmation" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div>

                            <label className="text-white dark:text-gray-200" for="passwordConfirmation">Date</label>
                            <input required {...register("publishDate")} id="date" type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" for="passwordConfirmation">Text Area</label>
                            <textarea required rows={"5"} {...register("blog")} id="textarea" type="textarea" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white">
                                Image
                            </label>
                            {/* <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg className="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span className="">Upload a file</span>
                      <input  {...register("Image")} id="file-upload" name="file-upload" type="file" className="sr-only"  accept='image/*'  /> 
                    </label>
                    <p className="pl-1 text-white">or drag and drop</p>
                  </div>
                  <p className="text-xs text-white">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div> */}
                            <input  {...register("Image")} type="file" accept='image/*' />
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        {/* <button type='submit' className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Save</button> */}
                        
                        <LoadingButton
                        type='submit'
                            loading={loadingBtn}
                            loadingPosition="start"
                             startIcon={<SaveIcon />}
                            variant="outlined"
                            sx={{bgcolor:'#fff',fontWeight:'bold'}}
                            disabled={false}
                        >
                            Save
                        </LoadingButton>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddPost;