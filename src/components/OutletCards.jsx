import React from 'react'

function OutletCards({subtitleHeading, outletDet}) {
  return (
    <main className="main-section--outletCards bg-[#081B33]">
        <p className="outlet--subtitle-heading uppercase text-center tracking-[1px] font-semibold py-[20px] text-[1.3rem] relative">{subtitleHeading}</p>
        <div className="main-section--inner">
            <div className="inner-multicolumn flex outline--wrapper-multicolumn p-[20px] grid grid-temp--2x w-[90%] m-auto gap-[2rem]">
                {outletDet.map((outlet)=>(
                    <div className="outlet-card w-[100%] m-auto bg-[#061f3c]">
                        <div className="card-inner-wrapper flex items-start justify-between w-full">
                            <div className="card-image--wrapper w-[50%]">
                                <img src={outlet.image} alt="" className="card-img" />
                            </div>
                            <div className="card-content--wrapper w-[50%] p-[20px]">
                                <p className="card-count text-[3rem] font-semibold">{outlet.count}</p>
                                <h2 className="card-heading font-semibold text-[2rem] my-[10px] mb-[20px] relative">{outlet.heading}</h2>
                                <p className="card-description w-[60%] mb-[20px]">{outlet.description}</p>
                                <p className="card-timings my-[20px]"><i className="fa-regular fa-clock"></i> {outlet.timing}</p>
                                <p className="card-mobile mb-[20px]"><i className="fa-solid fa-phone"></i> {outlet.mobile}</p>
                                <a href={outlet.buttonURL}>
                                    <button className="tertiary-button button uppercase w-[60%] tracking-[1px] cursor-pointer">{outlet.buttonText} <span className="iconArrow"></span></button>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="bottom-full-map--block relative">
            <div className="full-screen--map map-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29442.413757674083!2d75.85895400787439!3d22.71702424921076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1783759695423!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                    />
                </div>
                <div className="overlay-map--content">
                    <p className="subheading--map-cont uppercase text-[1.2rem] font-semibold">Easy to React</p>
                    <h3 className="heading--map-cont font-semibold text-[2rem] my-[20px]">All Outlets in indore</h3>
                    <p className="description--map-cont w-[60%] pb-[20px]">All our Showrooms are located across the city for your convenience.</p>
                    <a href="">
                        <button className="tertiary-button button uppercase tracking-[1px]">view on google maps</button>
                    </a>
                </div>
        </div>
    </main>
  )
}

export default OutletCards