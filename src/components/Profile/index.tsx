import React, { useEffect, useState } from 'react'
import { MdOutlineMic } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";
import { HiMagnifyingGlass, } from "react-icons/hi2";
import { TbListDetails, } from "react-icons/tb";
import { IoNotificationsOutline, } from "react-icons/io5";
import { VscMultipleWindows, } from "react-icons/vsc";
import { FiLogOut, } from "react-icons/fi";
import { BiUser, } from "react-icons/bi";
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function () {
  const [isSearchBoxAtTop, SetIsSearchBoxAtTop] = useState(false)
  useEffect(() => {
    // window.onscroll = function () { ScrollFucntion() };
    // Get the header
    var searchBox = document.getElementById("searchBox");
    // Get the offset position of the navbar
    // var sticky = searchBox.offsetTop;

    // function ScrollFucntion() {
    //   if (window.pageYOffset > sticky) {
    //     SetIsSearchBoxAtTop(true)
    //   } else {
    //     SetIsSearchBoxAtTop(false)
    //   }
    // }
  }, [])
  return (
    <section className="bg-brand-ember-l-3">
      <div className="pt-6">
        <div className="flex items-start justify-between px-6 mb-6 md:max-w-[750px] lg:max-w-[1000px] mx-auto">
          <div className='flex gap-4'>
            <div className='w-16 overflow-hidden h-16 border-2 border-white rounded-full'><img src="https://s3-alpha-sig.figma.com/img/b8a1/4fee/ddf3d93f03ed4e6c492091614740a2b8?Expires=1679875200&Signature=Zit2xKxgmEhQMxqPo2rmAhDQ9Sr26c04DbkYWBvvYcYVNhPZdfg2MDvzgygOhHznL1W95KW88Ie1aLBM2jAXwZXYGEDHKJ9WNk-D4jOmh0V~~NleMR8j2HhJMlF61edgeKIQ3gVhU9K~A9n4y-wPSmI20LPaH5dEEETIqyDjbvmZby04ywsJYSUvLLPyk30ft8WM~XIb5FTWVoJSevkSEKCoUkHv0WoQCjq3xWKVBapHR-t9rfXKHnYETZ3SSfD2oiFrdJe3K1uGKf-8cyGWd6q55khpw0et437ZccOObaEtoG4mqckFFHGcRBw7OrUxfAesP-MW9A7LWqyzcEMvWw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" className='w-full h-full object-cover'/></div>
            <div>
                <small className='text-xs text-brand-ember-l-1 block'>+91 7976472702</small>
                <small className='text-xs text-brand-ember-l-1 block'>krishansoni000005@gmail.com</small>
                <p className='text-white text-2xl'>Krishna Soni</p>
            </div>
          </div>
          <RiEdit2Fill className="text-3xl text-white" />
        </div>
        {/* <div className={`w-full duration-150 h-10 md:max-w-[750px] lg:max-w-[1000px] mx-auto mb-8  ${isSearchBoxAtTop ? "px-0 md:max-w-[100%] lg:max-w-[100%]" : "px-6 static"}`} id='searchBox' >
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
        </div> */}
        <div className="relative rounded-t-3xl left-0 w-full min-h-[100vh] bg-white  pt-8 pb-[70px]">
          <div className='w-full md:max-w-[750px] lg:max-w-[1000px] mx-auto px-6'>
            <h2 className='text-lg text-brand-ember-l-3 mb-3'>Namaste Krishna</h2>
            <div>
                <div className="flex gap-2 items-center border border-gray-100 rounded-lg p-2 mb-4">
                    <div className='bg-gray-200 text-xl rounded-md text-gray-600 p-2 flex items-center justify-center'><BiUser /></div>
                    <p className='text-gray-600 text-xl'>Profile & Securities </p>
                </div>
                <div className="flex gap-2 items-center border border-gray-100 rounded-lg p-2 mb-4">
                    <div className='bg-gray-200 text-xl rounded-md text-gray-600 p-2 flex items-center justify-center'><IoNotificationsOutline /></div>
                    <p className='text-gray-600 text-xl'>Notification </p>
                </div>
                <div className="flex gap-2 items-center border border-gray-100 rounded-lg p-2 mb-4">
                    <div className='bg-gray-200 text-xl rounded-md text-gray-600 p-2 flex items-center justify-center'><FiLogOut /></div>
                    <p className='text-gray-600 text-xl'>Log Out</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
