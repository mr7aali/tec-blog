import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Banner.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Box } from "@mui/system";
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from "@mui/material";

const Banner = () => {
    return (
        <Box sx={{ marginTop: '00px' }}>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                // Autoplay,
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >


                <SwiperSlide>
                    <div className="full-banner-page-container">
                        <div className="banner-img-container">

                            <div className="max-w-screen-lg	">
                                <img src="https://i.ibb.co/LdxCbWN/gallery-post-03-1024x512.jpg" alt="" />
                            </div>
                            <div className="sub-blog-container p-5 text-5xl bg-[#8e1d1d]">


                                <h1 > <span className="underLine">iPadOS 14 introduces new designed specifically for iPad</span></h1>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <CardHeader
                                        sx={{ padding: '15px 0' }}
                                        avatar={
                                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                                R
                                            </Avatar>
                                        }

                                        // action={
                                        //     <IconButton  aria-label="settings">
                                        //         <MoreVertIcon />
                                        //     </IconButton>
                                        // }


                                        title="Shrimp and Chorizo Paella"
                                        subheader="September 14, 2016"
                                    />
                                    <Box sx={{ color: 'black' }}>
                                        {/* <IconButton aria-label="delete" size="small">
                                            <DeleteIcon fontSize="inherit" />
                                        </IconButton> */}
                                     <Button variant="outlined">Read Post</Button>

                                    </Box>
                                </Box>


                            </div>

                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="full-banner-page-container">
                        <div className="banner-img-container">

                            <div className="max-w-screen-lg">
                                <img src="https://i.ibb.co/Y8kn66P/demo-image-41-1230x615.jpg" alt="" />
                            </div>
                            <div className="sub-blog-container p-5 text-5xl bg-[#8e1d1d]">


                                <h1 >
                                    <span className="underLine">4 types of research methods all designers should know</span> 
                                </h1>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <CardHeader
                                        sx={{ padding: '15px 0' }}
                                        avatar={
                                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                                R
                                            </Avatar>
                                        }

                                        // action={
                                        //     <IconButton  aria-label="settings">
                                        //         <MoreVertIcon />
                                        //     </IconButton>
                                        // }


                                        title="Shrimp and Chorizo Paella"
                                        subheader="September 14, 2016"
                                    />
                                    <Box sx={{ color: 'black' }}>
                                    <Button variant="outlined">Read Post</Button>

                                    </Box>
                                </Box>


                            </div>

                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="full-banner-page-container">
                        <div className="banner-img-container">

                            <div className="max-w-screen-lg	">
                                <img src="https://i.ibb.co/6ydTc7W/post-column-01-9-1230x615.jpg" alt="" />
                            </div>
                            <div className="sub-blog-container p-5 text-5xl bg-[#8e1d1d]">


                                <h1 > 
                                    <span className="underLine">These 5 tips will help you nail your next design presentation</span> 
                                    </h1>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <CardHeader
                                        sx={{ padding: '15px 0' }}
                                        avatar={
                                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                                R
                                            </Avatar>
                                        }

                                        // action={
                                        //     <IconButton  aria-label="settings">
                                        //         <MoreVertIcon />
                                        //     </IconButton>
                                        // }


                                        title="Shrimp and Chorizo Paella"
                                        subheader="September 14, 2016"
                                    />
                                    <Box sx={{ color: 'black' }}>
                                    <Button variant="outlined">Read Post</Button>

                                    </Box>
                                </Box>


                            </div>

                        </div>

                    </div>
                </SwiperSlide>
            </Swiper>

        </Box>
    );
};

export default Banner;