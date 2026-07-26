import { createFileRoute } from "@tanstack/react-router";
import heroVideo from "@/assets/hero-bg.mp4.asset.json";
import logo from "@/assets/strata26-logo.png.asset.json";
import batButton from "@/assets/bat-button.png.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "STRATA'26 — The Gotham Experience" },
      { name: "description", content: "STRATA'26 — Enter Gotham. Explore the events shaping the night." },
      { property: "og:title", content: "STRATA'26" },
      { property: "og:description", content: "Enter Gotham. Explore the events shaping the night." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  const handleEvents = () => {
    const el = document.getElementById("events");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.location.hash = "#events";
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={heroVideo.url}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />

      {/* Nav */}
      <nav className="relative z-20 flex items-center justify-between px-8 py-6 md:px-14">
        <img src={logo.url} alt="STRATA'26" className="h-12 md:h-14 w-auto drop-shadow-[0_0_20px_rgba(220,0,0,0.5)]" />
        <ul className="flex items-center gap-8 md:gap-12 text-sm md:text-base font-semibold uppercase tracking-[0.25em] text-white">
          <li><a href="#home" className="hover:text-red-500 transition-colors">Home</a></li>
          <li><a href="#events" className="hover:text-red-500 transition-colors">Events</a></li>
          <li><a href="#contact" className="hover:text-red-500 transition-colors">Contact</a></li>
        </ul>
      </nav>

      {/* Center content */}
      <div className="relative z-10 flex h-[calc(100%-6rem)] flex-col items-center justify-center px-6 text-center">
        <img
          src={logo.url}
          alt="STRATA'26"
          className="logo-pop w-[min(80vw,780px)] drop-shadow-[0_0_60px_rgba(220,0,0,0.55)]"
        />
        <p className="tagline-fade mt-6 max-w-2xl text-sm md:text-base uppercase tracking-[0.4em] text-white/70">
          I&apos;m Vengeance. Enter Gotham.
        </p>
      </div>

      {/* Bat-shaped EVENTS button */}
      <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2">
        <button
          onClick={handleEvents}
          aria-label="Events"
          className="group bat-float relative block cursor-pointer focus:outline-none"
        >
          <img
            src={batButton.url}
            alt="Events"
            className="h-28 md:h-36 w-auto drop-shadow-[0_0_25px_rgba(220,0,0,0.75)] transition-all duration-300 group-hover:scale-[1.06] group-hover:drop-shadow-[0_0_50px_rgba(255,20,20,1)]"
          />
          <span
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-black text-white"
            style={{
              fontSize: "18px",
              letterSpacing: "8px",
              textShadow: "0 0 10px rgba(255,0,0,0.9), 0 2px 4px rgba(0,0,0,0.9)",
            }}
          >
            EVENTS
          </span>
        </button>
      </div>
    </section>
  );
}

