import React from 'react'
import heroImg from '../assets/hero.png'
import '../assets/main.css'

// Components 
import StickyHeader from '../components/StickyHeader'
import HeroBanner from '../components/HeroBanner'
import ImageWithContent from '../components/ImageWithContent'
import MultipleImageGrid from '../components/MultipleImageGrid'
import MultipleCardGrid from '../components/MultipleCardGrid'
import Footer from '../components/Footer'

// Files
import bathProductImage from '../assets/bath-products.png'
import tilesImage from '../assets/tiles.png'
import lightsImage from '../assets/lights.png'
import othersImage from '../assets/others.png'
import iconBathProduct from '../assets/icons/iconBP.png'
import iconTiles from '../assets/icons/iconT.png'
import iconLights from '../assets/icons/iconL.png'
import iconOthers from '../assets/icons/iconO.png'
import showroomImage from '../assets/showroom.png'


const categoryDetails = [
  {
    heading: "Bath Products",
    collectionLink: "/bath-products",
    icon: iconBathProduct,
    imageSrc: bathProductImage,
    imagePosition: "right"
  },
  {
    heading: "Tiles",
    collectionLink: "/tiles",
    icon: iconTiles,
    imageSrc: tilesImage,
    imagePosition: "left"
  },
  {
    heading: "Lights",
    collectionLink: "/lights",
    icon: iconLights,
    imageSrc: lightsImage,
    imagePosition: "right"
  },
  {
    heading: "Others",
    collectionLink: "/others",
    icon: iconOthers,
    imageSrc: othersImage,
    imagePosition: "left"
  }
]

const BannerData = {
  heading: "Luxury Defined",
  subHeading: false,
  description: false,
  buttonAvailability: true
}


const cardData = [
  {
    image: showroomImage,
    title: "Showroom 1",
    address: "123, ABC Road, Vijay Nagar Indore, Madhya Pradesh",
    buttonText: "Get Direction",
    buttonURL: "#"
  },
  {
    image: showroomImage,
    title: "Showroom 2",
    address: "123, ABC Road, Vijay Nagar Indore, Madhya Pradesh",
    buttonText: "Get Direction",
    buttonURL: "#"
  },
  {
    image: showroomImage,
    title: "Showroom 3",
    address: "123, ABC Road, Vijay Nagar Indore, Madhya Pradesh",
    buttonText: "Get Direction",
    buttonURL: "#"
  },
  {
    image: showroomImage,
    title: "Showroom 4",
    address: "123, ABC Road, Vijay Nagar Indore, Madhya Pradesh",
    buttonText: "Get Direction",
    buttonURL: "#"
  }

]


function Home() {
  const data = [1,2,3,4,5,6,7,8];
  return (
    <main id="main-wrapper--frontend-home">
      <StickyHeader />
      <HeroBanner overlayData={BannerData} />
      {categoryDetails.map((cd, index)=>(
         <ImageWithContent 
          heading={cd.heading}
          collectionLink={cd.collectionLink}
          icon={cd.icon}
          imageSrc={cd.imageSrc}
          imagePosition={cd.imagePosition}
          />
      ))}
      <MultipleImageGrid 
        imageData={data} />
      <MultipleCardGrid 
        cardData={cardData} />
      <Footer />
    </main>
  )
}

export default Home