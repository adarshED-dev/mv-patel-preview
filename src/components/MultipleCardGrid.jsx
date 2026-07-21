import React from 'react'
import { Link } from "react-router-dom";

function MultipleCardGrid({cardData}) {
    const card_data = cardData
  return (
    <section className="main-multiple--card-grid px-5 py-10 md:p-8 lg:p-5 bg-[#041120] border-bottom">
        <div className="section-inner-wrapper">
            <h2 className="card--grid-heading text-white text-center text-2xl md:text-3xl my-8 md:my-10 uppercase">Our Showrooms</h2>
            <div className="main-card-grid card-showrooms flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between w-full lg:w-[80%] mx-auto gap-6 lg:gap-0">
                {card_data.map((cd)=>(
                    <div className="main-card showroom-data relative w-full sm:w-[47%] lg:w-[22%]">
                        <img src={cd.image} alt="showroom-image-outlet" className="w-full h-auto object-cover"/>
                        <div className="card-overlay--content multiplecard-content">
                            <h3 className="showroom-title font-semibold uppercase">{cd.title}</h3>
                            <p className="showroom-addr pb-[20px]">{cd.address}</p>
                            <a href={cd.buttonURL} className="get-direction uppercase text-center">{cd.buttonText} →</a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="button-wrapper flex justify-center mt-8 mb-8 md:mt-10 md:mb-10">
                <Link to="/outlets">
                    <button className="button button-primary outlet-button uppercase cursor-pointer">View All Outlet</button>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default MultipleCardGrid
