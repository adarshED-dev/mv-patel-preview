import React from 'react'
import image from '../assets/placeholder.png'

function MultipleImageGrid({imageData}) {
    const textData = imageData;
  return (
    <section className='main-image--grid border-bottom w-full bg-[#081B33] p-[20px]'>
        <div className="inner-wrapper-main ">
            <h2 className="image--grid-heading text-[#fff] text-center text-[20px] my-[2rem] uppercase">Our Exclusive Brands</h2>
            <ul className="image-card--grid main-grid-image grid">
                {textData.map((td)=>(
                    <li className="image-card card-li multiple-image-single flex items-center justify-center flex-col py-[10px]">
                        <img src={image} alt="our-brands--image" width="100px" height="auto" className="m-auto" />
                        <p className="card-text-brandFor uppercase text-[#fff] text-center mt-[10px]">{td}</p>
                    </li>
                ))}
            </ul>
            <div className="view-more-button-wrapper flex justify-center my-[2rem]">
                <button id="view-more-grid-cards" className="primary-button button uppercase cursor-pointer">View All Brands</button>
               </div>
        </div>
    </section>
  )
}

export default MultipleImageGrid