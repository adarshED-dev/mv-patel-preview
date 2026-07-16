// import {
//   Store,
//   Handshake,
//   MapPin,
//   Star,
// } from "lucide-react";

function Journey({ milestoneData }){

  const data = milestoneData;

  return (
    <section className="w-full bg-[#081B33] py-24 px-6 lg:px-20">
      {/* Heading */}

      <div className="max-w-xl mb-20">
        <span className="uppercase tracking-[3px] text-[#C89B5A] text-sm font-medium">
          Our Journey
        </span>

        <h2 className="mt-3 text-4xl md:text-5xl font-serif text-[#F6EEE8] leading-tight">
          Built on Passion.
          <br />
          Growing with Purpose.
        </h2>
      </div>

      {/* Timeline */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-14 xl:gap-8">
        {data.map((item, index) => {

          return (
            <div key={index} className="relative">
              {/* Icon & Line */}

              <div className="flex items-center mb-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#C89B5A]/40 bg-[#0B2140] text-[#C89B5A]">
                  {/* <Icon size={26} strokeWidth={1.7} /> */}
                </div>

                {index !== data.length - 1 && (
                  <div className="hidden xl:block h-px flex-1 bg-[#C89B5A]/40"></div>
                )}
              </div>

              {/* Content */}

              <span className="text-[#C89B5A] font-semibold">
                {item.year}
              </span>

              <h3 className="mt-3 text-xl font-medium text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-[15px] leading-7 text-white/70 max-w-[250px]">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Journey;