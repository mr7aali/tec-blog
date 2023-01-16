import * as React from 'react';
import Box from '@mui/material/Box';
import './BlogCard.css'
import { Avatar, Button, CardHeader } from '@mui/material';
import { AuthContext } from '../../contexts/AuthProvider';
import LoadingButton from '@mui/lab/LoadingButton';
import { Link } from 'react-router-dom';

export default function BlogCard({post,refetch}) {
    const [loadingBtnD, setLoadingBtnD] = React.useState(false);
    const { user } = React.useContext(AuthContext);
    console.log(post?.authorEmail)

    const handleDelete = (id) => {
        
        setLoadingBtnD(true);
        // console.log(data?._id)
        //https://daily-task-server-eta.vercel.app/deleteTask
        fetch(`https://tec-blog-server.vercel.app/deltePost?id=${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                setLoadingBtnD(false);
                console.log(data);
                refetch();
            })
    }



// const {title,author,authorPicture,blogPicture,blog}=post;
    return (

       

            <div className='max-w-screen-md mx-auto blg-card-container mb-5'>

                <div  className='blog-card-img-container'>
                    

                    <img src={post?.blogPicture} alt="" srcset="" />

                </div>

                <div className='blog-card-header-container'>
                    <h1>
                        <span className="underLine-blg">{post?.title}</span>
                    </h1>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <CardHeader
                            sx={{ height: '1px' }}
                            avatar={
                                <Avatar sx={{ height: '25px', width: '25px' }} aria-label="recipe">
                                    <img src={post?.authorPicture} alt="" srcset="" />
                                </Avatar>
                            }


                            title={post?.author}
                            subheader={post?.publishDate}
                        />
                        <Box sx={{ color: 'black' ,marginRight:'15px' }}>

                            
                               {/* ( post?.authorEmail === user?.email) && */}
                            <Link to={`/postdetails/${post?._id}`}>   <Button    size="small" variant="outlined">Read </Button>      </Link>              
                           
                            <LoadingButton
                             disabled ={!( post?.authorEmail === user?.email)}
                              onClick={()=>handleDelete(post?._id)} 
                              sx={{ marginLeft:'5px' }} color='error'  
                              size="small" variant="outlined"
                              loading={loadingBtnD}
                              >
                                Delete</LoadingButton>
                            
                        </Box>
                    </Box>
                </div>
                {/* <div>


                </div> */}

            </div>


       

    );
}