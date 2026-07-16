import React from 'react'

import StickyHeader from '../components/StickyHeader'
import HeroBanner from '../components/HeroBanner'
import Journey from '../components/Journey'
import ImageWithText from '../components/ImageWithText'
import AboutUSP from '../components/AboutUSP'
import CSRSection from '../components/CSRSections'
// import Icons from '../components/Icons'

import Footer from '../components/Footer'

const BannerData = {
  heading: "Defined by quality Driven by Trust.",
  subHeading: "About Us",
  description: "MV Patel & Co. is indore's trusted destination for premium bath fitings, tiles, and designer lighting. We partner with world-class brands to bring timeless elegance to your spaces.",
  buttonAvailability: false
}
const milestones = [
    {
      year: "2000",
      title: "Our Beginning",
      description:
        "Started as a small showroom with a vision to bring premium global brands to Indore.",
      icon: "",
    },
    {
      year: "2010",
      title: "Expanding Trust",
      description:
        "Earned the trust of thousands of customers and partnered with leading international brands.",
      icon: "",
    },
    {
      year: "2016",
      title: "Growing Presence",
      description:
        "Opened more showrooms across Indore to serve you better and closer.",
      icon: "",
    },
    {
      year: "Today",
      title: "Looking Ahead",
      description:
        "Continuing our journey of excellence with innovation, integrity and unmatched customer experience.",
      icon: "",
    },
  ];

const data = {
    tag: "CLIENT'S MESSAGE",

    title: (
      <>
        Excellence is in the
        <br />
        Details
      </>
    ),

    description:
      "At MV Patel & Co., our commitment is to offer products that transform spaces and elevate lifestyles. We believe in building lasting relationships through trust, quality, and personalized service.",

    signature: "Vijay Patel",

    designation: "Founder, MV Patel & Co.",

    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200",

    decorationImage:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600",
  };

const cardsData = [
  {
    title: "Our Mission",
    description: "...",
    icon: "",
  },
  {
    title: "Our Vision",
    description: "...",
    icon: "",
  },
  {
    title: "Our Values",
    icon: "",
    list: [
      "Integrity",
      "Quality",
      "Innovation",
      "Customer First",
    ],
  },
  {
    title: "Our Promise",
    description: "...",
    icon: "",
  },
];
 const csrDetails = {
    tag: "OUR CSR COMMITMENT",

    title: (
      <>
        Giving Back to
        <br />
        Our Community
      </>
    ),

    description:
      "We believe in responsible growth and contributing towards a better tomorrow. Through initiatives in education, sustainability and community welfare, we aim to make a positive impact beyond business.",

    cards: [
      {
        title: "Sustainability",
        description:
          "Promoting eco-friendly products and sustainable practices.",
        image:
          "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800",
      },
      {
        title: "Education",
        description:
          "Supporting education and skill development for children.",
        image:
          "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800",
      },
      {
        title: "Community",
        description:
          "Contributing to the well-being of our local communities.",
        image:
          "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800",
      },
    ],
  };
function About() {
  return (
    <main className="main-layout--about">
      <StickyHeader />
      <HeroBanner overlayData={BannerData} />
      <Journey milestoneData={milestones}/>
      <ImageWithText imagewithtextData={data} />
      <AboutUSP cardsDataprop={cardsData}/>
      <CSRSection csrData={csrDetails}/>
      <Footer />
    </main>
  )
}

export default About