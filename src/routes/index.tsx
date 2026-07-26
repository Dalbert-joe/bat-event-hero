import { createFileRoute } from "@tanstack/react-router";
import heroVideo from "@/assets/hero-bg.mp4.asset.json";
import logo from "@/assets/strata26-logo.png.asset.json";

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
          className="w-[min(80vw,780px)] drop-shadow-[0_0_60px_rgba(220,0,0,0.4)]"
        />
        <p className="mt-6 max-w-2xl text-sm md:text-base uppercase tracking-[0.4em] text-white/70">
          I&apos;m Vengeance. Enter Gotham.
        </p>
      </div>

      {/* Bat-shaped EVENTS button */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
        <button
          onClick={handleEvents}
          aria-label="Events"
          className="group relative block cursor-pointer transition-transform duration-300 hover:scale-110 focus:outline-none"
        >
          <svg
            viewBox="0 0 300 130"
            className="h-24 md:h-32 w-auto drop-shadow-[0_0_25px_rgba(220,0,0,0.7)] transition-all duration-300 group-hover:drop-shadow-[0_0_45px_rgba(255,0,0,0.95)]"
          >
            <defs>
              <linearGradient id="batGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1a0000" />
                <stop offset="50%" stopColor="#8B0000" />
                <stop offset="100%" stopColor="#000000" />
              </linearGradient>
            </defs>
            {/* Bat silhouette path */}
            <path
              d="M150,15
                 C158,15 162,22 165,32
                 C175,28 190,25 210,28
                 C215,20 225,15 240,18
                 C238,26 232,32 228,36
                 C245,40 265,52 285,72
                 C270,68 258,68 250,72
                 C255,82 258,92 255,105
                 C240,95 225,88 210,86
                 C205,92 195,98 185,100
                 C178,95 170,90 165,82
                 C160,92 155,100 150,110
                 C145,100 140,92 135,82
                 C130,90 122,95 115,100
                 C105,98 95,92 90,86
                 C75,88 60,95 45,105
                 C42,92 45,82 50,72
                 C42,68 30,68 15,72
                 C35,52 55,40 72,36
                 C68,32 62,26 60,18
                 C75,15 85,20 90,28
                 C110,25 125,28 135,32
                 C138,22 142,15 150,15 Z"
              fill="url(#batGrad)"
              stroke="#ff1a1a"
              strokeWidth="1.5"
            />
            <text
              x="150"
              y="72"
              textAnchor="middle"
              className="fill-white font-black"
              style={{ fontSize: "22px", letterSpacing: "6px" }}
            >
              EVENTS
            </text>
          </svg>
        </button>
      </div>
    </section>
  );
}
