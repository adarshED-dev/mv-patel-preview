// imagePosition

function ImageWithContent({heading, collectionLink, icon, imageSrc, imagePosition}){
    return (
        <section className="main-image-widthContent an bg-[#081B33]">
            <div className={`inner-wrapper-main w-full flex justify-between ${imagePosition === "left" ? "flex-row-reverse" : ""}`}>
                <div className="block-content--parent flex items-center w-[50%] bg-[#081B33]">
                    <div className="richtext-content-main w-[80%] mx-auto">
                        <div className="content-icon-box--main">
                            <img src={icon} alt="bath-products" width="100px" />
                        </div>
                        <h2 className="content-heading-main category-heading-with--bottomBorder text-[#fff] text-[40px] uppercase text-[300] mb-[20px] relative w-[max-content]">{ heading }</h2>
                        <button className="button transparet-button button--content uppercase tracking-[1px]">
                            <a href={collectionLink}>
                                Explore Brands →
                            </a>
                        </button>
                    </div>
                </div>
                <div className="block-image--parent w-[50%]">
                    <div className="image-wrapper">
                        <img src={imageSrc} alt="bath-products" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ImageWithContent