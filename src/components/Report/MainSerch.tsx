import { useEffect } from 'react'
import { FiMic } from "react-icons/fi";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { HiMagnifyingGlass, HiOutlineBellAlert } from "react-icons/hi2";
import { MdOutlineMic } from "react-icons/md";
import { useRouter } from "next/router";
import { BiDownvote, BiUpvote } from 'react-icons/bi';
export default function mainSerch() {

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
                        <h2 className='text-lg text-brand-ember-l-3 mb-3'>Recent Cyber Crime </h2>
                        <b><p>If You Don't find Any Solution Contact on 1930 or email on - https://cybercrime.gov.in</p></b>
                        <div className='py-2 border-b-2 border-gray-200 mb-2 cursor-pointer'>
                            <h2 className='mb-2 text-gray-600 text-lg'>WhatsApp Account Hack</h2>
                            <p className='text-base text-gray-400 mb-2'>You can Do these things ---  If your WhatsApp account is hacked, you should immediately contact WhatsApp support and report the issue. You can also take the following steps to secure your account:
                            Log out of all active WhatsApp sessions on other devices.
                            Change your WhatsApp password.
                            Enable two-step verification in WhatsApp settings to add an extra layer of security to your account.</p>
                            <div className='flex items-center justify-between'>
                                <p className='text-xs'>22 Suggestions</p>
                            </div>
                        </div>
                        <div className='py-2 border-b-2 border-gray-200 mb-2 cursor-pointer'>
                            <h2 className='mb-2 text-gray-600 text-lg'>ATM Lost</h2>
                            <p className='text-base text-gray-400 mb-2'>You can Do these things ---  You should immediately contact to Bank 
                            and block your card after then You can also complain to police if your account is hacked. </p>
                            <div className='flex items-center justify-between'>
                                <p className='text-xs'>22 Suggestions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}