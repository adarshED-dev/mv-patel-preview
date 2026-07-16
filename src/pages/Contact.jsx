import React from 'react'

import StickyHeader from '../components/StickyHeader'
import HeroBanner from '../components/HeroBanner'
import ContactForm from '../components/ContactForm'
import Map from '../components/Map'
import Footer from '../components/Footer'

const BannerData = {
  heading: "We're here to help you",
  subHeading: "Get in touch",
  description: "Our team is here to help you with the best possible support.",
  buttonAvailability: false
}

const formData = {
    title: "Send Us a Message",

    subtitle:
      "Fill in the form below and we'll get back to you shortly.",

    buttonText: "Send Message",

    office: {
      title: "Visit Our Office",
      icon: "",
      details: [
        "123, ABC Road",
        "Vijay Nagar",
        "Indore, Madhya Pradesh 452010",
        "India",
      ],
    },

    phone: {
      title: "Call Us",
      icon: "",
      details: ["+91 99999 99999", "+91 731 123 4567"],
    },

    email: {
      title: "Email Us",
      icon: "",
      details: [
        "hello@mvpatelandco.com",
        "info@mvpatelandco.com",
      ],
    },

    hours: {
      title: "Business Hours",
      icon: "",
      details: [
        "Mon - Sat : 10:30 AM - 8:00 PM",
        "Sunday : 11:00 AM - 6:00 PM",
      ],
    },

    social: {
      title: "Follow Us",
      icon: "",
      links: [
        {
          icon: "",
          url: "#",
        },
        {
          icon: "",
          url: "#",
        },
        {
          icon: "",
          url: "#",
        },
        {
          icon: "",
          url: "#",
        },
      ],
    },
  };

const mapData = {
  heading: "Visit Us in Indore",
  subHeading: "Our Location",
  description: "We have 4 premium showrooms across the city",
  buttonText: "View All Outlets",
  buttonURL: "/outlets"}




function Contact() {
  return (
    <main className="main-section--contact">
      <StickyHeader />
      <HeroBanner overlayData={BannerData} />
      <ContactForm formData={formData}/>
      <Map mapData={mapData}/>
      <Footer />
    </main>
  )
}

export default Contact