import React, { useEffect, useState } from 'react'
import { Tab } from '@headlessui/react';
import { MdOutlineMic } from "react-icons/md";
import { BsArrowBarRight } from "react-icons/bs";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { HiMagnifyingGlass, HiOutlineBellAlert } from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";
import HTMLComment from 'react-html-comment';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export default function () {
    const [isSearchBoxAtTop, SetIsSearchBoxAtTop] = useState(false)
    useEffect(() => {
        window.onscroll = function () { ScrollFucntion() };
        // Get the header
        var searchBox = document.getElementById("searchBox");
        // Get the offset position of the navbar
        var sticky = searchBox.offsetTop;

        function ScrollFucntion() {
            if (window.pageYOffset > sticky) {
                SetIsSearchBoxAtTop(true)
            } else {
                SetIsSearchBoxAtTop(false)
            }
        }
    }, [])

    // this area is for tabing
    let [categories] = useState({
        Center: [
            {
                id: 1,
                title: 'Instant access to healthcare',
                description: "The fine for riding without a helmet in Rajasthan can vary depending on the type of vehicle and the severity of the offense. As of my knowledge cutoff date of 2021, the fine for riding without a helmet in Rajasthan could range from Rs. 100 to Rs. 1,000. It's important to note that fines and penalties are subject to change, so it's always best to check the latest information from official sources.",
                queryLink: "/",
                upvote: 22,
                downvote: 4,
                suggestions: 23
            },
            {
                id: 2,
                title: 'Instant access to healthcare',
                description: "The fine for riding without a helmet in Rajasthan can vary depending on the type of vehicle and the severity of the offense. As of my knowledge cutoff date of 2021, the fine for riding without a helmet in Rajasthan could range from Rs. 100 to Rs. 1,000. It's important to note that fines and penalties are subject to change, so it's always best to check the latest information from official sources.",
                queryLink: "/",
                upvote: 22,
                downvote: 4,
                suggestions: 23
            },
        ],
        State: [
            {
                id: 1,
                title: 'Instant access to healthcare',
                description: "The fine for riding without a helmet in Rajasthan can vary depending on the type of vehicle and the severity of the offense. As of my knowledge cutoff date of 2021, the fine for riding without a helmet in Rajasthan could range from Rs. 100 to Rs. 1,000. It's important to note that fines and penalties are subject to change, so it's always best to check the latest information from official sources.",
                queryLink: "/",
                upvote: 22,
                downvote: 4,
                suggestions: 23
            },
            {
                id: 2,
                title: 'Instant access to healthcare',
                description: "The fine for riding without a helmet in Rajasthan can vary depending on the type of vehicle and the severity of the offense. As of my knowledge cutoff date of 2021, the fine for riding without a helmet in Rajasthan could range from Rs. 100 to Rs. 1,000. It's important to note that fines and penalties are subject to change, so it's always best to check the latest information from official sources.",
                queryLink: "/",
                upvote: 22,
                downvote: 4,
                suggestions: 23
            },
        ],
        District: [
            {
                id: 1,
                title: 'Instant access to healthcare',
                description: "The fine for riding without a helmet in Rajasthan can vary depending on the type of vehicle and the severity of the offense. As of my knowledge cutoff date of 2021, the fine for riding without a helmet in Rajasthan could range from Rs. 100 to Rs. 1,000. It's important to note that fines and penalties are subject to change, so it's always best to check the latest information from official sources.",
                queryLink: "/",
                upvote: 22,
                downvote: 4,
                suggestions: 23
            },
            {
                id: 2,
                title: 'Instant access to healthcare',
                description: "The fine for riding without a helmet in Rajasthan can vary depending on the type of vehicle and the severity of the offense. As of my knowledge cutoff date of 2021, the fine for riding without a helmet in Rajasthan could range from Rs. 100 to Rs. 1,000. It's important to note that fines and penalties are subject to change, so it's always best to check the latest information from official sources.",
                queryLink: "/",
                upvote: 22,
                downvote: 4,
                suggestions: 23
            },
        ],
    })
    // end here 
    return (
        <section className="bg-brand-ember-l-3">
            <div className="pt-6">
                <div className="flex items-center justify-between px-6 mb-6 md:max-w-[750px] lg:max-w-[1000px] mx-auto">
                    <a href="#" className=""><img src="/logo.png" alt="" className='h-16' /></a>
                    <HiOutlineBellAlert className="text-3xl text-white" />
                </div>
                <div className={`w-full duration-150 h-10 md:max-w-[750px] lg:max-w-[1000px] mx-auto mb-8  ${isSearchBoxAtTop ? "px-0 md:max-w-[100%] lg:max-w-[100%]" : "px-6 static"}`} id='searchBox' >
                    <form action="" className={`duration-150 ${isSearchBoxAtTop ? "fixed w-full top-0 left-0 px-0 z-20 " : "relative "}`}>
                        <input
                            type="search"
                            name=""
                            id=""
                            placeholder="Search for Problem... "
                            className={`w-full h-10 duration-150 bg-white focus:outline-none p-2 ${isSearchBoxAtTop ? "shadow-lg border-b border-gray-200" : "rounded-lg"}`}
                        />
                        <button className="absolute right-10 top-0 w-10 h-10 flex items-center justify-center text-2xl text-brand-ember-l-3">
                            <MdOutlineMic />
                        </button>
                        <button className={`absolute right-0 top-0 w-10 h-10 ${isSearchBoxAtTop ? "" : "rounded-lg"} bg-brand-ember-l-1 text-brand-ember-l-3 text-2xl flex items-center justify-center`}>
                            <HiMagnifyingGlass />
                        </button>
                    </form>
                </div>
                <div className="relative rounded-t-3xl left-0 w-full min-h-[100vh] bg-white  pt-8 pb-[70px]">
                    <div className='w-full md:max-w-[750px] lg:max-w-[1000px] mx-auto px-6'>
                        <h2 className='text-lg text-brand-ember-l-3 mb-3'>Search's</h2>
                        <Swiper
                            effect={"coverflow"}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={"auto"}
                            coverflowEffect={{
                                rotate: 35,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            pagination={true}
                            modules={[EffectCoverflow, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className='w-full bg-brand-ember-l-4 p-4 rounded-lg'>
                                    <p className='text-brand-ember-l-1 text-xs'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque repellat tempore quo modi labore! Ipsam rem sequi, at enim et nisi consectetur minima</p>
                                    <div className="flex gap-2 mt-2">
                                        <p className='text-white text-sm flex gap-1 items-center'><BiUpvote />22</p>
                                        <p className='text-white text-sm flex gap-1 items-center'><BiDownvote />5</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='w-full bg-brand-ember-l-4 p-4 rounded-lg'>
                                    <p className='text-brand-ember-l-1 text-xs'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque repellat tempore quo modi labore! Ipsam rem sequi, at enim et nisi consectetur minima</p>
                                    <div className="flex gap-2 mt-2">
                                        <p className='text-white text-sm flex gap-1 items-center'><BiUpvote />22</p>
                                        <p className='text-white text-sm flex gap-1 items-center'><BiDownvote />5</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='w-full bg-brand-ember-l-4 p-4 rounded-lg'>
                                    <p className='text-brand-ember-l-1 text-xs'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque repellat tempore quo modi labore! Ipsam rem sequi, at enim et nisi consectetur minima</p>
                                    <div className="flex gap-2 mt-2">
                                        <p className='text-white text-sm flex gap-1 items-center'><BiUpvote />22</p>
                                        <p className='text-white text-sm flex gap-1 items-center'><BiDownvote />5</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='w-full bg-brand-ember-l-4 p-4 rounded-lg'>
                                    <p className='text-brand-ember-l-1 text-xs'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque repellat tempore quo modi labore! Ipsam rem sequi, at enim et nisi consectetur minima</p>
                                    <div className="flex gap-2 mt-2">
                                        <p className='text-white text-sm flex gap-1 items-center'><BiUpvote />22</p>
                                        <p className='text-white text-sm flex gap-1 items-center'><BiDownvote />5</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='w-full bg-brand-ember-l-4 p-4 rounded-lg'>
                                    <p className='text-brand-ember-l-1 text-xs'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque repellat tempore quo modi labore! Ipsam rem sequi, at enim et nisi consectetur minima</p>
                                    <div className="flex gap-2 mt-2">
                                        <p className='text-white text-sm flex gap-1 items-center'><BiUpvote />22</p>
                                        <p className='text-white text-sm flex gap-1 items-center'><BiDownvote />5</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='w-full bg-brand-ember-l-4 p-4 rounded-lg'>
                                    <p className='text-brand-ember-l-1 text-xs'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque repellat tempore quo modi labore! Ipsam rem sequi, at enim et nisi consectetur minima</p>
                                    <div className="flex gap-2 mt-2">
                                        <p className='text-white text-sm flex gap-1 items-center'><BiUpvote />22</p>
                                        <p className='text-white text-sm flex gap-1 items-center'><BiDownvote />5</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='w-full bg-brand-ember-l-4 p-4 rounded-lg'>
                                    <p className='text-brand-ember-l-1 text-xs'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque repellat tempore quo modi labore! Ipsam rem sequi, at enim et nisi consectetur minima</p>
                                    <div className="flex gap-2 mt-2">
                                        <p className='text-white text-sm flex gap-1 items-center'><BiUpvote />22</p>
                                        <p className='text-white text-sm flex gap-1 items-center'><BiDownvote />5</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <button className='bg-brand-ember-l-3 my-4 text-white px-3 py-2 flex gap-2 items-center justify-center text-sm rounded-lg'>
                            have Problem in mind <BsArrowBarRight className='text-lg' />
                        </button>
                        <Tab.Group>
                            <Tab.List className="flex w-full justify-between p-1 pb-0 mb-2 border-b-2 border-gray-200">
                                {Object.keys(categories).map((category) => (
                                    <Tab
                                        key={category}
                                        className={({ selected }) =>
                                            classNames(
                                                "focus:outline-none py-1.5 px-1",
                                                selected
                                                    ? 'text-brand-ember-l-4 border-b-2 border-brand-ember-l-4'
                                                    : 'text-gray-400 border-b-2 border-transparent'
                                            )
                                        }
                                    >
                                        {category}
                                    </Tab>
                                ))}
                            </Tab.List>
                            <Tab.Panels className="mt-2 mb-6">
                                {Object.values(categories).map((posts, idx) => (
                                    <Tab.Panel
                                        key={idx}
                                        className={classNames(
                                            'rounded-xl bg-white',
                                        )}
                                    >
                                        <ul>
                                            {posts.map((post) => (
                                                <div className='py-2 border-b-2 border-gray-200 mb-2'>
                                                    <h2 className='mb-2 text-gray-500 text-lg'>{post.title}</h2>
                                                    <div className='flex items-center justify-between'>
                                                        <div className='flex items-center'>
                                                            <p className='text-brand-ember-l-2 text-xs flex gap-0.5 items-center pr-2 border-r border-gray-200'><BiUpvote />{post.upvote} Upvote</p>
                                                            <p className='text-red-600 text-xs flex gap-0.5 items-center pl-2'><BiDownvote />{post.downvote} Downvote</p>
                                                        </div>
                                                        <p className='text-xs'>{post.suggestions} Suggestions</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </ul>
                                    </Tab.Panel>
                                ))}
                            </Tab.Panels>
                        </Tab.Group>
                        <HTMLComment text="this is an html comment" />
                    </div>
                </div>
            </div>
        </section>
    );
}
