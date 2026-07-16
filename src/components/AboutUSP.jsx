import React from "react";


function AboutUSP ({ cardsDataprop }){

  const data = cardsDataprop;

  return (
    <section className="w-full bg-[#081B33] py-20 px-6 lg:px-20">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {data.map((item, index) => {

          return (
            <div
              key={index}
              className="group rounded-md border border-white/10 bg-[#0B2140] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#C89B5A]/40 hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
            >
              {/* Icon */}

              <div className="mb-6">
              </div>

              {/* Title */}

              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-[#C89B5A]">
                {item.title}
              </h3>

              {/* Description */}

              {item.description && (
                <p className="text-[15px] leading-7 text-white/70">
                  {item.description}
                </p>
              )}

              {/* List */}

              {item.list && (
                <ul className="space-y-3 text-[15px] text-white/75">
                  {item.list.map((value, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#C89B5A]" />
                      {value}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutUSP;