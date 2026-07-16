import React from "react";

function CSRSection({ csrData }){
  const defaultData = {
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

  const content = csrData || defaultData;

  return (
    <section className="w-full bg-[#081B33] py-20 px-6 lg:px-20">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_2fr]">
        {/* Left Content */}

        <div className="border-l border-[#C89B5A]/30 pl-6">
          <span className="text-xs font-semibold uppercase tracking-[2px] text-[#C89B5A]">
            {content.tag}
          </span>

          <h2 className="mt-3 text-4xl lg:text-5xl font-serif leading-tight text-[#F5ECE5]">
            {content.title}
          </h2>

          <p className="mt-8 max-w-md leading-8 text-white/70">
            {content.description}
          </p>
        </div>

        {/* Right Cards */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {content.cards.map((card, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-md border border-white/10 bg-[#0B2140] transition-all duration-300 hover:-translate-y-1 hover:border-[#C89B5A]/40"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h3 className="font-serif text-xl text-[#F5ECE5]">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/70">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CSRSection;