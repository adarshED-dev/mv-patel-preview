import logo from '../assets/logo.png'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

function StickyHeader(){
    const [isScrolled, setIsScrolled] = useState(false);
    // useEffect(()=>{

    // }, [])
    return (
        <header className="header-wrapper fixed top-[0] z-[9] w-full p-[1rem]">
            <div className="inner-wrapper flex w-full justify-between items-center">
                <div className="menu-items flex w-[32%]">
                    <ul className="menu--lists pl-[20px] flex justify-left gap-[30px]">
                        <li className="li-menu uppercase px-[10px] text-[#fff] tracking-[1px]">
                            <a href="/">Home</a>
                        </li>
                            <li className="li-menu uppercase px-[10px] text-[#fff] tracking-[1px]">
                                <a href="/brands">Brands</a>
                            </li>
                                <li className="li-menu uppercase px-[10px] text-[#fff] tracking-[1px]">
                                    <a href="/outlets">Outlets</a>
                                </li>
                            <li className="li-menu uppercase px-[10px] text-[#fff] tracking-[1px]">
                                <a href="/about">About</a>
                                <Link to="/about">About</Link>
                            </li>
                        <li className="li-menu uppercase px-[10px] text-[#fff] tracking-[1px]">
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="header-logo w-[32%] flex justify-center">
                    <div className="image-wrapper">
                        <a href="/">
                            <img src={logo} alt="mv-patel-logo" width="200px" height="auto" />
                        </a>
                    </div>
                </div>
                <div className="header-search w-[32%]">
                    <div className="search-input w-[80%] m-auto">
                        <input type="text" className="search w-full" placeholder="Search" />
                    </div>
                </div>
            </div>
        </header>
    )
}
export default StickyHeader