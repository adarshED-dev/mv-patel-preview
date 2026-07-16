import video from '../assets/slideshow1.mp4';
import { Link } from "react-router-dom";


function HeroBanner({overlayData}){
    return (
        <section className="banner-main main-banner w-full h-[100vh] overflow-hidden z-[9]">
            <div className="banner-video-wrapper w-full h-[100%] relative">
                <video width="100%" height="100%" muted="true" autoplay="true" loop="true" className="w-[100%] h-[100%] object-cover">
                    <source src={video} type="video/mp4" />
                </video>
                <div className="overlay-content data-overlay--banner-main-content">
                    {overlayData.subheading ? (<p className="subheading-content uppercase">overlayData.subheading</p>):null}
                    <h1 className="banner-overlay-heading uppercase">{overlayData.heading}</h1>
                    <ul className="para-overlay flex w-auto items-center gap-[1rem] justify-center">
                        { overlayData.description ? (
                                <p className="description-content">{overlayData.description}</p>
                            ) : (
                                <>
                                    <li className="para-lists uppercase">Curated Bath</li>
                                    <div className="separator-round"></div>
                                    <li className="para-lists uppercase">Tiles</li>
                                    <div className="separator-round"></div>
                                    <li className="para-lists uppercase">Lightings</li>
                                </>
                            )
                        }
                    </ul>
                    <br />
                    {overlayData.buttonAvailability ? (
                        <div className="button-groups flex justify-center gap-[1rem]">
                        <button className="primary-button button uppercase cursor-pointer">
                            <Link to="/brands">
                                Explore Brands
                            </Link>
                        </button>
                        <button className="secondary-button button uppercase cursor-pointer">
                            <Link to="/outlets">
                                Visit our showrooms
                            </Link>
                        </button>
                    </div>
                    ) : null}
                </div>
            </div>
        </section>
    )
}

export default HeroBanner
