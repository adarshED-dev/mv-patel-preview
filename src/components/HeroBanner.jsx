import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import video from "../assets/slideshow1.mp4";

function HeroBanner({ overlayData = {} }) {
  const videoRef = useRef(null);

  // Some browsers only honor autoplay if `muted` is also set as a DOM
  // property (not just an HTML attribute), so this guarantees it.
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Dark tint for text contrast over the video */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Overlay content — properly layered on top of the video */}
      <div className="relative z-2 flex h-full w-full flex-col items-center justify-end px-6 py-[4rem] text-center text-white">
        {overlayData.subheading && (
          <p className="mb-3 text-xs sm:text-sm uppercase tracking-[3px] text-white/80">
            {overlayData.subheading}
          </p>
        )}

        <h1 className="uppercase font-serif text-3xl sm:text-5xl md:text-6xl leading-tight max-w-3xl">
          {overlayData.heading}
        </h1>

        <ul className="mt-6 flex w-auto flex-wrap items-center justify-center gap-4">
          {overlayData.description ? (
            <li className="text-sm sm:text-base text-white/85 max-w-xl list-none">
              {overlayData.description}
            </li>
          ) : (
            <>
              <li className="uppercase text-sm sm:text-base tracking-wide list-none">
                Curated Bath
              </li>
              <li aria-hidden="true" className="h-1 w-1 rounded-full bg-white/60 list-none" />
              <li className="uppercase text-sm sm:text-base tracking-wide list-none">
                Tiles
              </li>
              <li aria-hidden="true" className="h-1 w-1 rounded-full bg-white/60 list-none" />
              <li className="uppercase text-sm sm:text-base tracking-wide list-none">
                Lightings
              </li>
            </>
          )}
        </ul>

        {overlayData.buttonAvailability && (
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/brands"
              className="uppercase text-sm sm:text-base font-medium px-6 py-3 bg-white text-black transition-colors hover:bg-gray-200"
            >
              Explore Brands
            </Link>
            <Link
              to="/outlets"
              className="uppercase text-sm sm:text-base font-medium px-6 py-3 border border-white text-white transition-colors hover:bg-white/10"
            >
              Visit our showrooms
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default HeroBanner;