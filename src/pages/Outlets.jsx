import React from 'react'

import StickyHeader from '../components/StickyHeader'
import HeroBanner from '../components/HeroBanner'
import OutletCards from '../components/OutletCards'
import Footer from '../components/Footer'


import outletPlaceholder from '../assets/outlets/outlet-placeholder.jpg'


const BannerData = {
  heading: "Visit our outlets",
  subHeading: "Our Showrooms",
  description: "Experience our premium collections in person. Find a showroom near you.",
  buttonAvailability: true
}

const outletData = [
  {
    image: outletPlaceholder,
    count: "01",
    heading: "Vijay Nagar",
    description: "123, ABC Road, Vijay Nagar, Indore, Madhya Pradesh 452010",
    timing: "10:30 AM - 8:00 PM (Mon - Sat)",
    mobile: "+91 99999 99999",
    buttonText: "Get Direction",
    buttonURL: "/direction"
  },
  {
    image: outletPlaceholder,
    count: "02",
    heading: "Palasia",
    description: "123, ABC Road, Palasia, Indore, Madhya Pradesh 452010",
    timing: "10:30 AM - 8:00 PM (Mon - Sat)",
    mobile: "+91 99999 99999",
    buttonText: "Get Direction",
    buttonURL: "/direction"
  },
  {
    image: outletPlaceholder,
    count: "03",
    heading: "Bhawar Kua",
    description: "142/3 Bhawarkua, Indore, Madhya Pradesh 452010",
    timing: "10:30 AM - 8:00 PM (Mon - Sat)",
    mobile: "+91 99999 99999",
    buttonText: "Get Direction",
    buttonURL: "/direction"
  },
  {
    image: outletPlaceholder,
    count: "04",
    heading: "Malhar Ganj",
    description: "12, ABC Road, Malhar Ganj, Indore, Madhya Pradesh 452010",
    timing: "10:30 AM - 8:00 PM (Mon - Sat)",
    mobile: "+91 99999 99999",
    buttonText: "Get Direction",
    buttonURL: "/direction"
  }
]

function Outlets() {
  return (
    <main className="main-layout--brands">
      <StickyHeader />
      <HeroBanner overlayData={BannerData} />
      <OutletCards outletDet={outletData} subtitleHeading="4 Showrooms in Indore" />
      <Footer />
    </main>
  )
}

export default Outlets