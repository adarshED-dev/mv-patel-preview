import React from 'react'
import image from '../assets/placeholder.png'

function MultipleImageGrid({ imageData }) {
    const textData = imageData;

    return (
        <section className='main-image--grid border-bottom w-full bg-[#081B33] px-5 py-10'>
            <div className="inner-wrapper-main">

                <h2 className="image--grid-heading text-[#fff] text-center text-2xl md:text-3xl my-10 uppercase tracking-[3px]">
                    Our Exclusive Brands
                </h2>

                <ul className="image-card--grid main-grid-image grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-8">

                    {textData.map((td, index) => (

                        <li key={index} className=" image-card card-li multiple-image-single group flex items-center justify-center flex-col py-6 px-4 border-t-sm transition-all duration-500 ease-in-out cursor-pointer">

                            <img
                                src={image}
                                alt="our-brands--image"
                                width="100"
                                height="auto"
                                className="
                                    m-auto
                                    transition-all
                                    duration-500
                                    group-hover:scale-110
                                "
                            />

                            <p
                                className="
                                    card-text-brandFor
                                    uppercase
                                    text-[#fff]
                                    text-center
                                    mt-4
                                    text-sm
                                    md:text-base
                                    transition-colors
                                    duration-300
                                    group-hover:text-[#D9B16A]
                                "
                            >
                                {td}
                            </p>

                        </li>

                    ))}

                </ul>

                <div className="view-more-button-wrapper flex justify-center my-12">

                    <button
                        id="view-more-grid-cards"
                        className="
                            primary-button
                            button
                            uppercase
                            cursor-pointer
                            transition-all
                            duration-300
                            hover:scale-105
                            hover:shadow-xl
                            active:scale-95
                        "
                    >
                        View All Brands
                    </button>

                </div>

            </div>
        </section>
    )
}

export default MultipleImageGrid