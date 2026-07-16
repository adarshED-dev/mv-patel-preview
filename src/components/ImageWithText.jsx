import React from "react";

function ImageWithText({ imagewithtextData }){
  const defaultData = {
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

  const content = imagewithtextData || defaultData;
  return (
    <section className="w-full bg-[#081B33]">
      <div className="grid lg:grid-cols-2">
        {/* Left Image */}

        <div className="h-[380px] lg:h-[520px] overflow-hidden">
          <img
            src={content.image}
            alt={content.title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Content */}

        <div className="relative flex items-center px-8 py-14 md:px-14 lg:px-20">
          <div className="relative z-10 max-w-xl">
            <span className="text-xs uppercase tracking-[2px] text-[#C89B5A] font-semibold">
              {content.tag}
            </span>

            <h2 className="mt-3 text-4xl lg:text-5xl font-serif leading-tight text-[#F5ECE5]">
              {content.title}
            </h2>

            <div className="mt-8 h-[2px] w-16 bg-[#C89B5A]" />

            <p className="mt-8 text-white/75 leading-8">
              {content.description}
            </p>

            <h3 className="mt-10 text-3xl font-serif italic text-[#C89B5A]">
              {content.signature}
            </h3>

            <p className="mt-2 text-sm text-white/60">
              {content.designation}
            </p>
          </div>

          {/* Decorative Image */}

          {content.decorationImage && (
            <img
              src={content.decorationImage}
              alt=""
              className="absolute bottom-0 right-0 w-44 opacity-25 lg:w-60 pointer-events-none select-none"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default ImageWithText;