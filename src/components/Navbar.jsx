import React, { useState } from 'react'
import { HiMiniBars3 } from 'react-icons/hi2'
import { IoIosSearch } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'
import { Link, NavLink, useLocation } from 'react-router-dom'

const TopNavbar = () => {

    const [toggleNavbar, setToggleNavbar] = useState(false)
    const [responsiveNavbar, setResponsiveNavbar] = useState(false)

    const location = useLocation();


    return (
        <>
            <div className="">
                <div className="flex px-5 py-2 mx-auto md:flex-row flex-row-reverse items-center max-w-7xl w-full justify-between">

                    <div className="flex items-center md:max-w-[14rem] md:w-full gap-5 md:flex-row flex-row-reverse">
                        <HiMiniBars3 className='text-2xl cursor-pointer' onClick={() => setResponsiveNavbar(!responsiveNavbar)} />
                        <IoIosSearch className='text-2xl cursor-pointer' />


                    </div>
                    <Link to={"/"}>
                        <img src="../../public/Images/Home/logo.png" className='max-w-[97px] w-full' alt="" />
                    </Link>
                    <div className="md:flex hidden items-center max-w-[14rem] w-full gap-3">
                        <Link to={"login"}>
                            <button onClick={() => setToggleNavbar(true)} className='hover:bg-black border-black px-5 py-2 transition-all duration-300 text-black bg-white border-2 hover:text-white font-medium'>Sign In</button>
                        </Link>
                        <Link to={"register"}>
                            <button onClick={() => setToggleNavbar(true)} className='bg-black border-black px-5 py-2 transition-all duration-300 hover:text-black hover:bg-white border-2 text-white'>Register</button>
                        </Link>
                    </div>
                </div>

                <div className=" flex justify-center items-center mb-4">
                    <div className="border rounded-full flex justify-center overflow-hidden  items-center">
                        <Link to={"/"} onClick={() => setToggleNavbar(false)} className={`py-3 block px-5 pl-7 transition-all duration-500 font-medium hover:bg-zinc-50 ${location.pathname === "/" && "bg-zinc-50"} `}>Home</Link>
                        <Link to={"/servey"} onClick={() => setToggleNavbar(false)} className={`py-3 block px-5 pr-7 transition-all duration-500 font-medium hover:bg-zinc-50 ${location.pathname === "/servey" && "bg-zinc-50"}`}>Survey</Link>
                    </div>
                </div>
                {
                    !toggleNavbar && (
                        <div className="border-b md:block hidden fastFadeIn">
                            <div className="md:px-10 px-5 py-1.5  mx-auto max-w-7xl w-full">
                                <ul className='flex items-center justify-center gap-5 font-medium'>
                                    <li> <NavLink className={"navUnderLine"} to={"/"}> Home</NavLink></li>
                                    <li> <NavLink className={"navUnderLine"} to={"/news"}> News</NavLink></li>
                                    <li> <NavLink className={"navUnderLine"} to={"/sport"}> Sport</NavLink></li>
                                    <li> <NavLink className={"navUnderLine"} to={"/business"}> Business</NavLink></li>
                                    <li> <NavLink className={"navUnderLine"} to={"/culture"}> Culture</NavLink></li>
                                    <li> <NavLink className={"navUnderLine"} to={"/travel"}> Travel</NavLink></li>
                                    <li> <NavLink className={"navUnderLine"} to={"/earth"}> Earth</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    )
                }
            </div>

            <div
                onClick={() => setResponsiveNavbar(!responsiveNavbar)}
                className={`fixed top-0 left-0 ${responsiveNavbar ? "w-screen opacity-100" : "w-0 opacity-0"} bg-[#000000a3] h-screen z-40`}
                style={{
                    transitionProperty: "width, opacity",
                    transitionDuration: responsiveNavbar ? "200ms, 1500ms" : "1000ms, 200ms",
                }}
            ></div>
            <div className={`fixed top-0 transition-all duration-500 left-0 ${responsiveNavbar ? "md:w-[23rem] w-full" : "w-[0rem]"}  overflow-hidden bg-white h-screen z-50`}>
                <IoClose className='absolute top-5 right-5 text-3xl text-zinc-800 cursor-pointer transition-all hover:rotate-90 hover:scale-110 duration-500' onClick={() => setResponsiveNavbar(!responsiveNavbar)} />
                <ul className='flex flex-col gap-1 font-medium px-7 pt-16'>
                    <li> <Link onClick={() => setResponsiveNavbar(!responsiveNavbar)} className={`block ${location.pathname === "/" && "bg-zinc-100"} transition-all duration-500 p-3 rounded-lg hover:bg-zinc-100 `} to={"/"}> Home</Link></li>
                    <li> <Link onClick={() => setResponsiveNavbar(!responsiveNavbar)} className={`block ${location.pathname === "/sport" && "bg-zinc-100"} transition-all duration-500 p-3 rounded-lg hover:bg-zinc-100 `} to={"/sport"}> Sport</Link></li>
                    <li> <Link onClick={() => setResponsiveNavbar(!responsiveNavbar)} className={`block ${location.pathname === "/business" && "bg-zinc-100"} transition-all duration-500 p-3 rounded-lg hover:bg-zinc-100 `} to={"/business"}> Business</Link></li>
                    <li> <Link onClick={() => setResponsiveNavbar(!responsiveNavbar)} className={`block ${location.pathname === "/culture" && "bg-zinc-100"} transition-all duration-500 p-3 rounded-lg hover:bg-zinc-100 `} to={"/culture"}> Culture</Link></li>
                    <li> <Link onClick={() => setResponsiveNavbar(!responsiveNavbar)} className={`block ${location.pathname === "/travel" && "bg-zinc-100"} transition-all duration-500 p-3 rounded-lg hover:bg-zinc-100 `} to={"/travel"}> Travel</Link></li>
                    <li> <Link onClick={() => setResponsiveNavbar(!responsiveNavbar)} className={`block ${location.pathname === "/earth" && "bg-zinc-100"} transition-all duration-500 p-3 rounded-lg hover:bg-zinc-100 `} to={"/earth"}> Earth</Link></li>
                </ul>
            </div>

        </>
    )
}

export default TopNavbar