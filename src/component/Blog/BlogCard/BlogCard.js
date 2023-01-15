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
export default function BlogCard() {


    return (

        <div className='max-w-screen-md mx-auto' style={{display:'grid' ,  gridTemplateColumns:'3fr 1fr',border:'1px solid red'}}>

            <div className='max-w-screen-md mx-auto blg-card-container mb-5'>

                <div  className='blog-card-img-container'>
                    <img src="https://i.ibb.co/LdxCbWN/gallery-post-03-1024x512.jpg" alt="" srcset="" />

                </div>

                <div className='blog-card-header-container'>
                    <h1>
                        iPadOS 14 introduces new designed specifically for iPad</h1>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <CardHeader
                            sx={{ height: '1px' }}
                            avatar={
                                <Avatar sx={{ bgcolor: red[500], height: '25px', width: '25px' }} aria-label="recipe">
                                    R
                                </Avatar>
                            }


                            title="Shrimp and Chorizo Paella"
                            subheader="September 14, 2016"
                        />
                        <Box sx={{ color: 'black' ,marginRight:'15px' }}>
                            <Button size="small" variant="text">Read Post</Button>

                        </Box>
                    </Box>
                </div>
                {/* <div>


                </div> */}

            </div>


        </div>

    );
}