import React from "react";

function ContactForm ({ formData }) {
  const defaultData = {
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

  const content = formData || defaultData;

  const infoSections = [
    content.office,
    content.phone,
    content.email,
    content.hours,
  ];

  return (
    <section className="w-full bg-[#081B33] py-20 px-6 lg:px-20">
      <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
        {/* Left */}

        <div className="rounded-md border border-white/10 bg-[#0B2140] p-8 lg:p-10">
          <h2 className="font-serif text-4xl text-[#F5ECE5]">
            {content.title}
          </h2>

          <p className="mt-4 text-white/70">
            {content.subtitle}
          </p>

          <form className="mt-10 space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <input
                type="text"
                placeholder="Full Name"
                className="rounded border border-white/10 bg-transparent px-5 py-4 text-white placeholder:text-white/40 focus:border-[#C89B5A] focus:outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="rounded border border-white/10 bg-transparent px-5 py-4 text-white placeholder:text-white/40 focus:border-[#C89B5A] focus:outline-none"
              />
            </div>

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded border border-white/10 bg-transparent px-5 py-4 text-white placeholder:text-white/40 focus:border-[#C89B5A] focus:outline-none"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded border border-white/10 bg-transparent px-5 py-4 text-white placeholder:text-white/40 focus:border-[#C89B5A] focus:outline-none"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full resize-none rounded border border-white/10 bg-transparent px-5 py-4 text-white placeholder:text-white/40 focus:border-[#C89B5A] focus:outline-none"
            />

            <button
              type="submit"
              className="rounded bg-[#C89B5A] px-8 py-4 font-medium uppercase tracking-wide text-white transition hover:bg-[#b78746]"
            >
              {content.buttonText} →
            </button>
          </form>
        </div>

        {/* Right */}

        <div className="rounded-md border border-white/10 bg-[#0B2140] p-8 lg:p-10">
          <div className="space-y-10">
            {infoSections.map((section, index) => {

              return (
                <div
                  key={index}
                  className="flex gap-5"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/10 text-[#C89B5A]">
                  </div>

                  <div>
                    <h3 className="mb-3 uppercase tracking-wide text-[#C89B5A] text-sm font-semibold">
                      {section.title}
                    </h3>

                    <div className="space-y-2">
                      {section.details.map((item, i) => (
                        <p
                          key={i}
                          className="leading-7 text-white/75"
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Social */}

            <div className="flex gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 text-[#C89B5A]">
              </div>

              <div>
                <h3 className="mb-4 uppercase tracking-wide text-[#C89B5A] text-sm font-semibold">
                  {content.social.title}
                </h3>

                <div className="flex gap-4">
                  {content.social.links.map((item, index) => {

                    return (
                      <a
                        key={index}
                        href={item.url}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all duration-300 hover:border-[#C89B5A] hover:text-[#C89B5A]"
                      >
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;