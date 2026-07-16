import React from 'react'

function CategoryCards({categoryData}) {
  return (
    <main className="main--cateogory-card p-[2rem] bg-[#081B33]">
        <div className="internal-category--cards">
            <div className="cards-wrapper--inner grid-twoimage-grabber grid gap-[2rem]">
                {categoryData.map((cd)=>(
                    <div className="cards-main main-category-show-cards w-[100%] relative rounded-lg">
                        <div className="cards-internal-main">
                            <img src={cd.cardImage} alt="category-cards" className="cards-image rounded-lg" width="100%" />    
                            <div className="card-category--content overlay-content z-[4]">
                                <h1 className="card-heading heading">{cd.cardHeading}</h1>
                                <div className="card-heading--border"></div>
                                <a href="" className="card-link--anchor uppercase">Explore More</a>
                            </div>
                        </div>
                    </div>  
                ))}
            </div>
        </div>
    </main>
  )
}

export default CategoryCards