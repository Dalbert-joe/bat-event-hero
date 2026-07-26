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
          <svg
            viewBox="0 0 512 220"
            className="h-28 md:h-36 w-auto drop-shadow-[0_0_25px_rgba(220,0,0,0.75)] transition-all duration-300 group-hover:scale-[1.06] group-hover:drop-shadow-[0_0_50px_rgba(255,20,20,1)]"
          >
            <defs>
              <linearGradient id="batGrad" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="#0a0000" />
                <stop offset="55%" stopColor="#1a0000" />
                <stop offset="100%" stopColor="#000000" />
              </linearGradient>
            </defs>
            {/* Realistic bat silhouette: head, ears, spread wings with finger bones, tail */}
            <path
              fill="url(#batGrad)"
              stroke="#b30000"
              strokeWidth="1.2"
              d="M256,40
                 C250,32 246,20 240,10
                 C244,22 240,32 236,40
                 C228,38 222,40 218,46
                 C210,40 200,36 190,36
                 C178,36 168,40 160,48
                 C140,36 118,30 96,32
                 C74,34 54,44 36,60
                 C58,54 78,56 96,64
                 C74,64 54,74 40,92
                 C60,84 82,84 102,92
                 C82,96 66,110 58,130
                 C78,118 100,114 122,120
                 C106,126 92,138 84,156
                 C104,146 128,142 150,150
                 C138,158 128,170 124,186
                 C144,172 168,164 190,168
                 C182,178 178,190 180,204
                 C196,190 214,180 232,178
                 C238,188 246,196 256,204
                 C266,196 274,188 280,178
                 C298,180 316,190 332,204
                 C334,190 330,178 322,168
                 C344,164 368,172 388,186
                 C384,170 374,158 362,150
                 C384,142 408,146 428,156
                 C420,138 406,126 390,120
                 C412,114 434,118 454,130
                 C446,110 430,96 410,92
                 C430,84 452,84 472,92
                 C458,74 438,64 416,64
                 C434,56 454,54 476,60
                 C458,44 438,34 416,32
                 C394,30 372,36 352,48
                 C344,40 334,36 322,36
                 C312,36 302,40 294,46
                 C290,40 284,38 276,40
                 C272,32 268,22 272,10
                 C266,20 262,32 256,40 Z"
            />
          </svg>
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

