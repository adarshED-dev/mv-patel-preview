import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function useRevealOnScroll() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

function ImageWithContent({ heading, collectionLink, icon, imageSrc, imagePosition }) {
  const [contentRef, contentVisible] = useRevealOnScroll();
  const [imageRef, imageVisible] = useRevealOnScroll();

  const contentFromLeft = imagePosition === "left";

  return (
    <section className="main-image-widthContent w-full overflow-hidden bg-[#081B33]">
      <div
        className={`inner-wrapper-main flex w-full flex-col md:flex-row ${
          imagePosition === "left" ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Content side */}
        <div
          ref={contentRef}
          className={`block-content--parent flex w-full items-center bg-[#081B33] py-16 md:w-1/2 md:py-0 transition-all duration-1000 ease-out ${
            contentVisible
              ? "opacity-100 translate-x-0"
              : `opacity-0 ${contentFromLeft ? "translate-x-10" : "-translate-x-10"}`
          }`}
        >
          <div className="richtext-content-main mx-auto w-[70%] mx-auto text-center md:text-left">
            <div
              className={`content-icon-box--main mb-4 transition-all duration-700 delay-150 ${
                contentVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
              }`}
            >
              <img
                src={icon}
                alt={`${heading} icon`}
                className="mx-auto md:mx-0 w-16 sm:w-20 transition-transform duration-500 hover:scale-110 hover:-translate-y-1"
              />
            </div>

            <h2 className="content-heading-main relative mb-5 w-max mx-auto md:mx-0 font-light uppercase text-white text-2xl sm:text-3xl md:text-[40px] tracking-wide">
              {heading}
              <span
                className={`absolute -bottom-2.5 left-0 h-px bg-gradient-to-r from-white/80 to-transparent transition-all duration-700 delay-300 ${
                  contentVisible ? "w-full" : "w-0"
                }`}
              />
            </h2>

            <Link
              to={collectionLink}
              className="button transparet-button button--content group inline-flex items-center gap-2 uppercase tracking-[1px] text-white text-sm sm:text-base transition-all duration-300 hover:gap-3 hover:text-amber-200"
            >
              Explore Brands
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>

        {/* Image side */}
        <div
          ref={imageRef}
          className={`block-image--parent w-full md:w-1/2 overflow-hidden transition-all duration-1000 ease-out ${
            imageVisible ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <div className="image-wrapper group h-64 sm:h-80 md:h-[500px] overflow-hidden">
            <img
              src={imageSrc}
              alt={`${heading} showcase`}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImageWithContent;