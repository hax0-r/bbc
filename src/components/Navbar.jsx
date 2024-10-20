import React, { useState } from 'react'
import { HiMiniBars3 } from 'react-icons/hi2'
import { IoIosSearch } from 'react-icons/io'
import { Link, NavLink, useLocation } from 'react-router-dom'

const TopNavbar = () => {

    const [toggleNavbar, setToggleNavbar] = useState(false)
    const location = useLocation();


    return (
        <>
            <div className="">
                <div className="flex px-5 py-2 mx-auto md:flex-row flex-row-reverse items-center max-w-7xl w-full justify-between">

                    <div className="flex items-center md:max-w-[14rem] md:w-full gap-5 md:flex-row flex-row-reverse">
                        <HiMiniBars3 className='text-2xl cursor-pointer' />
                        <IoIosSearch className='text-2xl cursor-pointer' />


                    </div>
                    <Link to={"/"}>
                        <img src="/public/Images/Home/logo.png" className='max-w-[97px] w-full' alt="" />
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

                                    {
                                        location.pathname !== "/servey" && (
                                            <li> <NavLink className={"navUnderLine"} to={"/"}> Home</NavLink></li>
                                        )
                                    }
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

        </>
    )
}

export default TopNavbar