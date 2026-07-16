import React from 'react'
import { Link } from "react-router-dom";

function Map({mapData}) {
  return (
    <main className="main-section--map">
        <div className="inner-wrapper--main">
            <div className="map-section--wrapper relative w-full">
                <div className="full-screen--map map-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29442.413757674083!2d75.85895400787439!3d22.71702424921076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1783759695423!5m2!1sen!2sin"
                        width="100%"
                        height="350"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                    />
                </div>
                <div className="overlay-map--content">
                    <p className="subheading--map-cont uppercase">{mapData.heading}</p>
                    <h3 className="heading--map-cont text-[2rem]">{mapData.subHeading}</h3>
                    <p className="description--map-cont my-[10px]">{mapData.description}</p>
                    <Link to={mapData.buttonURL}>
                        <button className="tertiary-button button uppercase cursor-pointer">{mapData.buttonText}</button>
                    </Link>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Map
