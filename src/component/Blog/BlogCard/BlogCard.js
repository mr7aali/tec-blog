import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import './BlogCard.css'
import { Avatar, Button, CardHeader } from '@mui/material';
import { red } from '@mui/material/colors';
export default function BlogCard({post}) {
console.log(post);
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
                            <Button    size="small" variant="outlined">Read </Button>
                            <Button sx={{ marginLeft:'5px' }} color='error'  size="small" variant="outlined">Delete</Button>
                            
                        </Box>
                    </Box>
                </div>
                {/* <div>


                </div> */}

            </div>


       

    );
}