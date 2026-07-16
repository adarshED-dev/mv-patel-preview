import React from 'react'



function Icons({iconsData}) {
  return (
    <main className="main--icons-section p-[20px] bg-[#041120]">
        <div className="inner-section--wrapper">
            <div className="heading-block">
                <h2 className="icons-sect--heading uppercase font-semibold">Why Choose Us</h2>
            </div>
            <div className="icon-section--wrapper main-grabber flex w-80%] justify-evenly m-auto p-[20px]">
                {iconsData.map((icons)=>(
                    <div className="icon-main icon-standalone text-center">
                        <div className="icon-img-wrapper">
                            <img src={icons.iconImage} alt="icon-hp" className="icon-main" />
                        </div>
                        <div className="icon-content-wrappe">
                            <h4 className="icon-heading icon-text-bold">{icons.iconHeading}</h4>
                            <p className="icon-brief icon-text-light">{icons.iconContent}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </main>
  )
}

export default Icons
