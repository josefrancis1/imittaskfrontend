import React from 'react'
import Navbar from './Navbar'
import pic from '../assets/banner.png'
import aboutPic from '../assets/about.png' // Make sure to add your about image
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from '../assets/bach1.png'
import image2 from '../assets/bach2.png'
import image3 from '../assets/bach3.png'
const Home = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div >
            <Navbar />
            <div className='realtive bg-[url("/src/assets/banner.png")] bg-cover justify-center flex flex-col bg-left h-[633px] pl-14'>
                <Carousel
                    // swipeable={true}
                    // draggable={true}
                    // showDots={true}
                    responsive={responsive}
                    // ssr={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    // keyBoardControl={true}
                    customTransition="all .5"
                    // transitionDuration={500}
                    containerClass="carousel-container"
                    // removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"

                >
                    <div className=' h-[462px] w-[665px] rounded-xl overflow-hidden'>
                        <img className='h-full' src="/src/assets/bach1.png" alt="Image 1" />
                    </div>
                    <div className=' h-[462px] w-[665px] rounded-xl overflow-hidden'>
                        <img className='h-full' src="/src/assets/bach2.png" alt="Image 2" />
                    </div>
                    <div className='  h-[462px] w-[665px] rounded-xl overflow-hidden'>

                        <img className='h-full' src="/src/assets/bach3.png" alt="Image 3" />
                    </div>
                </Carousel>
                <div className='absolute left-18 bottom-40 text-white w-[611px]'>
                    <h1 className='text-[46px] font-semibold'>Capture Your Imagination with <span className=" text-[#C08C5D]">Captcharts!</span> </h1>
                    <a href="">Explore</a>
                </div>
            </div>

            <div className='px-4 md:px-16 lg:px-56 py-12 md:py-24 space-y-6'>
                <h4 className='text-black text-[46px] font-semibold'>About <br /><span className='text-[#C08C5D] text-[46px] font-semibold'>Captcharts</span></h4>
                {/* <h4 className='text-[#C08C5D] text-[46px] font-semibold'>Captcharts</h4> */}
                <p className='tracking-wide leading-loose'>Welcome to the world of limitless creativity and boundless possibilities! Imagine a photography camp where
                    the shutter captures not just moments, but the spirit of determination and resilience. We're thrilled to present a unique experience
                    tailored for students with determination, where the focus is not just on framing a shot, but on framing a brighter future. <br />
                    In the heart of this camp, we celebrate the power of visual storytelling as a means of empowerment. Our goal is to provide a supportive and inclusive environment for young photographers who navigate the world with determination. Through the lens of a camera, we embark on a journey that transcends barriers and amplifies the voices that often go unheard.</p>
                <img className='  h-[400px] w-[1114px]' src="/src/assets/about.png" alt="" />
                <p className='tracking-wide leading-loose'>This camp isn't just about technical skills. It's about unlocking individual potential, fostering self-expression, and building a community where everyone's unique perspective is not only welcomed but celebrated. <br />
                    This isn't just a photography camp; it's a kaleidoscope of inspiration, where each participant adds their own vibrant hue to the canvas of creativity. So, whether you're a novice or a seasoned photographer, come join us in capturing the extraordinary essence of determination through the lens of your camera. Let's embark on a journey where every snapshot is a testament to the wilful spirit within us all.</p>
            </div>

            <div className='grid grid-cols-5 md:grid-cols-5 h-[640px]'>
                <div className='bg-[#C08C5D] w-full h-full col-span-3 p-20'>
                    <h1 className='text-[140px] font-bold text-white opacity-[0.5] '>01</h1>
                    <h2>Lorem Ipsum is simply dummy text of the printing</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="w-full  bg-[url('/src/assets/ba2.png')] bg-cover bg-center grid-start-3 col-span-2 md:col-start-4">B</div>

            </div>

            <div className='grid md:grid-cols-3 gap-8 p-6 md:p-16'>
                <div className='p-14'>
                    <p className='text-[36px]  text-[#C08C5D] mt-12'>Lorem Ipsum is simply dummy text of the printing</p>
                </div>
                <div className='col-span-2 p-16'>
                    <p className='tracking-wide leading-loose text-center'>Hey there! i’m Megha Mohan, a 16 year old UAE based enthusiast with a passion for Photography and Astrophysics. Whether I’m diving into the world of photography o exploring the latest news on Dark Matter, you can bet I’m always up for an adventure.
                        On this webpage, I’m laying down my thoughts, experiences and maybe a sprinkle of my experience in photography.
                        When I’m not lost in the virtual world or buried in my favorite books, you can catch me hanging out with my camera and telescope, tackling the latest challenges, and trying my hands at Astrophotography. So, buckle up, join me on this digital escapade, and let’s navigate the world of photography.
                    </p>
                    <p className='text-[36px] font-semibold text-[#C08C5D] text-center mt-6 '>MEGHA       MOHAN</p>

                </div>
            </div>

            <div className='px-4 md:px-16 py-8'>
                <h4 className='text-black text-[46px] font-semibold ml-16'>Gallery</h4>
                <p className='ml-16'>Lorem Ipsum is simply dummy <br /> text of the printing</p>
                <div className="grid grid-rows-3 grid-flow-col gap-2  p-16">
                    <div className='bg-[url("/src/assets/ga1.png")] bg-cover text-white h-[310px] w-[421px]'></div>
                    <div className='bg-[url("/src/assets/ga2.png")] bg-cover row-start-2 text-white h-[310px] w-[421px]'></div>
                    <div className='bg-[url("/src/assets/ga3.png")] bg-cover row-span-2 h-[620px] w-[520px] text-white'></div>
                    <div className=''></div>
                    <div className='bg-[url("/src/assets/ga4.png")] bg-cover text-white h-[310px] w-[421px] '></div>
                    <div className='bg-[url("/src/assets/ga1.png")] bg-cover text-white h-[310px] w-[421px]'></div>



                </div>
            </div>

            <div className='px-4 md:px-16 py-8'>
                <h4 className='text-black text-[46px] font-semibold ml-16'>Events</h4>
                <div className='grid grid-cols-3 gap-2  p-16'>
                    <div >
                        <img className='h-[590px]' src="/src/assets/event1.png" alt="" />
                        <p className='leading-loose'>Lorem Ipsum is simply dummy text of the printing</p>
                    </div>
                    <div >
                        <img className='h-[590px]' src="/src/assets/event2.png" alt="" />
                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                    </div>
                    <div >
                        <img className='h-[590px]' src="/src/assets/event3.png" alt="" />
                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-3 bg-[#C08C5D] h-[400px] rounded-3xl ml-4 mr-4 mb-4'>
                <img className='w-[281px] h-[311px] bg-cover bg-white ml-12' src="/src/assets/logo2.png" alt="" />
                <div className='py-12'>
                    <h3 className='text-white text-[26px] mt-12 font-semibold'>Lets Connect</h3>
                    <p className='text-white text-[26px] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className="flex rounded-md border-2 border-blue-500 overflow-hidden max-w-md mx-auto font-[sans-serif]">
                        <input type="email" placeholder="Search Something..."
                            className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3" />
                        <button type='button' className="flex items-center justify-center bg-[#007bff] px-5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="fill-white">
                                <path
                                    d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default Home