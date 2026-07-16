import React from 'react'

import StickyHeader from '../components/StickyHeader'
import HeroBanner from '../components/HeroBanner'
import Multicolumn from '../components/Multicolumn'
import Footer from '../components/Footer'
import brandPlaceHolderImage from '../assets/brands/brand-bg-placeholder.png'
import brandLogoPlaceholder from '../assets/brands/brand-logo.png'

const multicolumnDetails = [
    {
        image: brandPlaceHolderImage,
        logoImage: brandLogoPlaceholder,
        subtext: "Bath",
        description: "Italian luxury and innovation for exclusive bathroom experiences.",
        buttonText1: "Visit Store",
        buttonURL1: "/link",
        buttonText2: "Download Catalogue",
        buttonURL2: "/catalogue"
    },
    {
        image: brandPlaceHolderImage,
        logoImage: brandLogoPlaceholder,
        subtext: "Bath",
        description: "Italian luxury and innovation for exclusive bathroom experiences.",
        buttonText1: "Visit Store",
        buttonURL1: "/link",
        buttonText2: "Download Catalogue",
        buttonURL2: "/catalogue"
    },
    {
        image: brandPlaceHolderImage,
        logoImage: brandLogoPlaceholder,
        subtext: "Bath",
        description: "Italian luxury and innovation for exclusive bathroom experiences.",
        buttonText1: "Visit Store",
        buttonURL1: "/link",
        buttonText2: "Download Catalogue",
        buttonURL2: "/catalogue"
    }

]

const BannerData = {
  heading: "Luxury Defined",
  subHeading: "Our Global Brands",
  description: "We Partner with the world's finest brands to bring you exceptional quality, design and performance.",
  buttonAvailability: true
}

function Brands() {
  return (
    <main className="main-layout--brands">
      <StickyHeader />
      <HeroBanner overlayData={BannerData} />
      <Multicolumn multicolumnDet={multicolumnDetails} />
      <Footer />
    </main>
  )
}

export default Brands