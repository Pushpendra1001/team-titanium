import React, { useEffect, useMemo, useState } from 'react'
import { Tab } from '@headlessui/react';
import { MdOutlineMic } from "react-icons/md";
import { BiDownvote, BiUpvote } from "react-icons/bi";
import { HiMagnifyingGlass, HiOutlineBellAlert } from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useRouter } from 'next/router';
import posts from '../../utils/posts.json'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function () {
    const [isSearchBoxAtTop, SetIsSearchBoxAtTop] = useState(false);
    const router = useRouter();
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
    const catagories = useMemo(() => {
        const ex = { 'Center': [], 'State': [], 'District': [] }
        console.log(posts);
        
        for(let ind in posts){
            console.log();
            
            ex[posts[ind].catagory]?.push(posts[ind])
        }
        return ex
    }, [])
    // console.log(catagories);

    // this area is for tabing
    // let [categories] = useState({
    //     Center: [
    //         {
    //             id: 1,
    //             title: 'Road Under Construction From 6 months',
    //             description: "I am Priya from Bajaj Nagar and I travel to office every day by bus. The road near her house is under construction for the past six months and there is no sign of completion. The construction work has caused traffic jams, dust pollution and noise disturbance. I spend more time and money on commuting and she often reaches late to her office. She wants to know why the road construction is paused and when it will resume.",
    //             queryLink: "/",
    //             upvote: 17,
    //             downvote: 4,
    //             suggestions: 23
    //         },
    //         {
    //             id: 2,
    //             title: 'Jhalana kachi Basti Slum Area',
    //             description: "Rajesh lives in a slum area where garbage is dumped on the streets and open drains are overflowing with sewage. He and his family often suffer from diseases like diarrhea, typhoid and malaria due to the unhygienic conditions. He wants to complain to the municipal authorities but he does not know how to do it. He also feels hopeless because he thinks that no one cares about his problems.",
    //             queryLink: "/",
    //             upvote: 27,
    //             downvote: 6,
    //             suggestions: 21
    //         },

    //     ],
    //     State: [
    //         {
    //             id: 1,
    //             title: 'Outdated Syllabus in Colleges',
    //             description: "The fine for riding without a helmet in Rajasthan can vary depending on the type of vehicle and the severity of the offense. As of my knowledge cutoff date of 2021, the fine for riding without a helmet in Rajasthan could range from Rs. 100 to Rs. 1,000. It's important to note that fines and penalties are subject to change, so it's always best to check the latest information from official sources.",
    //             queryLink: "/",
    //             upvote: 69,
    //             downvote: 7,
    //             suggestions: 34
    //         },
    //         {
    //             id: 2,
    //             title: 'Robbery in our Area',
    //             description: "Robbery in our area is a serious issue that needs to be addressed. Many people have complained about being robbed or threatened by robbers in the streets, shops, homes, or workplaces. Some of the complaints include losing money, Bike, valuables documents, or personal belongings; being injured or traumatized; feeling unsafe or insecure; and having to deal with legal or insurance matters. The complaints also indicate that the robbers are often armed, violent, or organized. The police and the local authorities have been notified of these complaints and have promised to take action to prevent and reduce robbery in our area but for  now there is no fruitful results...",
    //             queryLink: "/",
    //             upvote: 18, 
    //             downvote: 11,
    //             suggestions: 11
    //         },
    //         {
    //             id:2,
    //             title: 'Sanitation problem',
    //             description: 'I want to talk to you about a very important issue that affects our health, dignity, and well-being. It is the sanitation problem. Sanitation problem means not having access to hygienic toilets. Hygienic toilets mean having toilets that are clean, safe, private, and separate for boys and girls. Hygienic toilets also mean having access to clean water, handwashing facilities, and waste management Many people in our area do not have hygienic toilets. They have to defecate in fields, forests, bodies of water, or other public spaces. This is very bad for our health and environment. It can cause diseases , infections , environmental pollution , etc. It can also affect our dignity , education , and development. We need to solve this problem urgently. We need to demand that the government provide us with adequate infrastructure , services , and awareness to ensure that everyone has access to hygienic toilets , and practices good hygiene behaviors . We also need to take responsibility for keeping our toilets clean and using them properly. Sanitation is a basic human right . It is also essential for our health and happiness . Let us work together to end the sanitation problem in our area . Thank you for your attention .',
    //             queryLink: "/",
    //             upvote: 78, 
    //             downvote: 6,
    //             suggestions: 9

    //         }
    //     ],
    //     District: [
    //         {
    //             id: 1,
    //             title: 'Improving Unemployment in Our City',
    //             description: "Unemployment is a serious problem that affects many people in urban areas. It means that people who are willing and able to work cannot find a suitable job. Unemployment can have various causes, such as lack of skills, education, training, or opportunities; economic slowdown; competition; automation; etc. Unemployment can have negative consequences for individuals and society, such as loss of income, poverty, crime, depression, social unrest, etc. Therefore, it is important to create more employment opportunities and provide support and assistance to the unemployed people in cities",
    //             queryLink: "/",
    //             upvote: 112,
    //             downvote: 12,
    //             suggestions: 53
    //         },
    //         {
    //             id: 2,
    //             title: 'Poor Food Quality in Trains',
    //             description: "Many people who travel by metro bus rely on the food that is served on board or at the stations. However, the quality of the food is very poor and unsatisfactory. The food is often stale, unhygienic, tasteless, or overpriced. This can cause health problems, dissatisfaction, and frustration among the passengers. The metro bus authorities should take steps to improve the food quality and variety, and ensure that it meets the standards of safety and hygiene. They should also provide affordable and nutritious options for different dietary preferences and needs. This would enhance the comfort and convenience of the metro bus travelers and make their journey more enjoyable.",
    //             queryLink: "/",
    //             upvote: 41,
    //             downvote: 8,
    //             suggestions: 33
    //         },
    //         {
    //             id: 3,
    //             title: 'Traffic Problem on Sindhi Camp',
    //             description: "Sindhi Camp is the inter-state bus terminal of Jaipur city in India. It is located along Station Road in Jaipur. By this there are traffic probelm created and very hard to travel",
    //             queryLink: "/",
    //             upvote: 22,
    //             downvote: 4,
    //             suggestions: 23
    //         },
    //     ],
    // })
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
                        <h2 className='text-lg text-brand-ember-l-3 mb-3'>Tranding Posts</h2>
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
                            className="mySwiper mb-6"
                        >
                            <SwiperSlide>
                                <div className='w-full bg-brand-ember-l-4 p-4 rounded-lg min-h-[190px]'>
                                    <p className='text-brand-ember-l-1 text-xs'>  I am Priya from Bajaj Nagar and I travel to office every day by bus. The road near her house is under construction for the past six months and there is no sign of completion. The construction work has caused traffic jams, dust pollution and noise disturbance...  </p>
                                    <div className="flex gap-2 mt-2">
                                        <p className='text-white text-sm flex gap-1 items-center'><BiUpvote />22</p>
                                        <p className='text-white text-sm flex gap-1 items-center'><BiDownvote />5</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='w-full bg-brand-ember-l-4 p-4 rounded-lg min-h-[190px]'>
                                    <p className='text-brand-ember-l-1 text-xs'>Rajesh lives in a slum area where garbage is dumped on the streets and open drains are overflowing with sewage. He and his family often suffer from diseases like diarrhea, typhoid and malaria due to the unhygienic conditions...</p>
                                    <div className="flex gap-2 mt-2">
                                        <p className='text-white text-sm flex gap-1 items-center'><BiUpvote />22</p>
                                        <p className='text-white text-sm flex gap-1 items-center'><BiDownvote />5</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='w-full bg-brand-ember-l-4 p-4 rounded-lg min-h-[190px]'>
                                    <p className='text-brand-ember-l-1 text-xs'>Robbery in our area is a serious issue that needs to be addressed. Many people have complained about being robbed or threatened by robbers in the streets, shops, homes, or workplaces</p>
                                    <div className="flex gap-2 mt-2">
                                        <p className='text-white text-sm flex gap-1 items-center'><BiUpvote />22</p>
                                        <p className='text-white text-sm flex gap-1 items-center'><BiDownvote />5</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='w-full bg-brand-ember-l-4 p-4 rounded-lg min-h-[190px]'>
                                    <p className='text-brand-ember-l-1 text-xs'>Outdated syllabus in college is a problem that affects many students and their future prospects. It means that the curriculum followed by higher educational institutions is not relevant or updated to reflect the current trends and demands of the society and the industry...</p>
                                    <div className="flex gap-2 mt-2">
                                        <p className='text-white text-sm flex gap-1 items-center'><BiUpvote />22</p>
                                        <p className='text-white text-sm flex gap-1 items-center'><BiDownvote />5</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='w-full bg-brand-ember-l-4 p-4 rounded-lg min-h-[190px]'>
                                    <p className='text-brand-ember-l-1 text-xs'>  I am Priya from Bajaj Nagar and I travel to office every day by bus. The road near her house is under construction for the past six months and there is no sign of completion. The construction work has caused traffic jams, dust pollution and noise disturbance...  </p>
                                    <div className="flex gap-2 mt-2">
                                        <p className='text-white text-sm flex gap-1 items-center'><BiUpvote />22</p>
                                        <p className='text-white text-sm flex gap-1 items-center'><BiDownvote />5</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='w-full bg-brand-ember-l-4 p-4 rounded-lg min-h-[190px]'>
                                    <p className='text-brand-ember-l-1 text-xs'>Rajesh lives in a slum area where garbage is dumped on the streets and open drains are overflowing with sewage. He and his family often suffer from diseases like diarrhea, typhoid and malaria due to the unhygienic conditions...</p>
                                    <div className="flex gap-2 mt-2">
                                        <p className='text-white text-sm flex gap-1 items-center'><BiUpvote />22</p>
                                        <p className='text-white text-sm flex gap-1 items-center'><BiDownvote />5</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='w-full bg-brand-ember-l-4 p-4 rounded-lg min-h-[190px]'>
                                    <p className='text-brand-ember-l-1 text-xs'>Outdated syllabus in college is a problem that affects many students and their future prospects. It means that the curriculum followed by higher educational institutions is not relevant or updated to reflect the current trends and demands of the society and the industry...</p>
                                    <div className="flex gap-2 mt-2">
                                        <p className='text-white text-sm flex gap-1 items-center'><BiUpvote />22</p>
                                        <p className='text-white text-sm flex gap-1 items-center'><BiDownvote />5</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <h2 className='text-lg text-brand-ember-l-3 mb-3'>Recent Post</h2>
                        <Tab.Group>
                            <Tab.List className="flex w-full justify-between p-1 pb-0 mb-2 border-b-2 border-gray-200">
                                {Object.keys(catagories).map((category) => (
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
                                {Object.values(catagories).map((posts, idx) => (
                                    <Tab.Panel
                                        key={idx}
                                        className={classNames(
                                            'rounded-xl bg-white',
                                        )}
                                    >
                                        <ul>
                                            {posts instanceof Array && posts.map((post) => (
                                                <div className='py-2 border-b-2 border-gray-200 mb-2' onClick={() => router.push(`/post/${post.id}`)}>
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
                    </div>
                </div>
            </div>
        </section>
    );
}
