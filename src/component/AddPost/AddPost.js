import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';


const AddPost = () => {
    const { user } = useContext(AuthContext);
    const [loadingBtn, setLoadingBtn] = React.useState(false);
    const { reset, register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();

    const imgHostKey = 'b9cc75dfb9f8d26897e40cb96b3c38cd';
    const from = location.state?.from?.pathname || "/";

    


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

                fetch('https://tec-blog-server.vercel.app/addpost', {
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
        <div className='mb-32'>

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