import React from 'react'

import StickyHeader from '../components/StickyHeader'
import HeroBanner from '../components/HeroBanner'
import CategoryCards from '../components/CategoryCards'
import Footer from '../components/Footer'
import MultipleImageGrid from '../components/MultipleImageGrid'
import Icons from '../components/Icons'
import Map from '../components/Map'

import cateLightsProduct  from  '../assets/categoryImage/cat-lightsproduct.png'


const BannerData = {
  heading: "Luxury for Every Details",
  subHeading: "Premium Selections",
  description: "Discover the world's finest bath fittings, tiles and designer lighting - Curated for timeless spaces. ",
  buttonAvailability: false
}

const categoryData = [
  {
    cardHeading: "Matte Finish Lights",
    cardImage: cateLightsProduct
  },
  {
    cardHeading: "Hanging Lights",
    cardImage: cateLightsProduct
  },
  {
    cardHeading: "Ceiling Lights",
    cardImage: cateLightsProduct
  },
  {
    cardHeading: "Wallpapers Lights",
    cardImage: cateLightsProduct
  }
]

const iconsData = [
  {
    iconImage: "",
    iconHeading: "Global Premium Brands",
    iconContent: "Access the World's finest bath, tile & lighting brands." 
  },
  {
    iconImage: "",
    iconHeading: "Authentic Quality",
    iconContent: "100% Original products with international quality standards." 
  },
  {
    iconImage: "",
    iconHeading: "Multiple Showrooms",
    iconContent: "Visit any of our premium showrooms across indore." 
  },
  {
    iconImage: "",
    iconHeading: "Expert Consultation",
    iconContent: "Personalised Guidance from product experts." 
  }
]

const mapData = {
  heading: "Visit Us",
  subHeading: "Our Showrooms",
  description: "Experience our collections in person. Find a showroom near you.",
  buttonText: "View All Outlets",
  buttonURL: "/outlets"}



function LightsCollection() {
   const data = [1,2,3,4,5,6,7,8]
  return (
    <main id="main-wrapper--frontend-lightscollection">
      <StickyHeader />
      <HeroBanner 
        overlayData={BannerData} />
      <CategoryCards 
        categoryData={categoryData} />
      <MultipleImageGrid 
        imageData={data} />
      <Icons 
        iconsData={iconsData}/>
      <Map mapData={mapData} />
      < Footer/>
    </main>
  )
}

export default LightsCollection