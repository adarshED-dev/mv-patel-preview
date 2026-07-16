import React from 'react'

function MultipleCardGrid({cardData}) {
    const card_data = cardData
  return (
    <section className="main-multiple--card-grid p-[20px] bg-[#041120] border-bottom">
        <div className="section-inner-wrapper">
            <h2 className="card--grid-heading text-[#fff] text-center text-[20px] my-[2rem] uppercase">Our Showrooms</h2>
            <div className="main-card-grid card-showrooms flex items-center justify-between w-[80%] mx-auto">
                {card_data.map((cd)=>(
                    <div className="main-card showroom-data w-[22%] relative ">
                        <img src={cd.image} alt="showroom-image-outlet" width="100%" height="100%"/>
                        <div className="card-overlay--content multiplecard-content">
                            <h3 className="showroom-title font-semibold uppercase">{cd.title}</h3>
                            <p className="showroom-addr pb-[20px]">{cd.address}</p>
                            <a href={cd.buttonURL} className="get-direction uppercase text-center">{cd.buttonText} →</a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="button-wrapper flex justify-center mt-[2rem] mb-[2rem]">
                <a href="/outlets">
                    <button className="button button-primary outlet-button uppercase cursor-pointer">View All Outlet</button>
                </a>
            </div>
        </div>
    </section>
  )
}

export default MultipleCardGrid