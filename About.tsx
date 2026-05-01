import "@fontsource/anton";
import "@fontsource/saira";
import { useState, useEffect, useRef } from "react";
import { heroHeadline1, heroHeadline2, members } from "../data/about";

// Shine hook
function useShine<T extends HTMLElement>(className: string) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add(className);
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("show");
          void el.offsetWidth;
          el.classList.add("show");
        } else {
          el.classList.remove("show");
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [className]);
  return ref;
}

// Desktop double-layer name
function LayeredName({ name, nameSpacing, nameFlip }: { name: string; nameSpacing: string; nameFlip: boolean }) {
  return (
    <div className="relative flex items-center justify-center" style={{ height: "170px" }}>
      <span style={{ fontFamily: "Anton, sans-serif", fontSize: "160px", color: "#14499C", position: "absolute", fontStyle: "italic", lineHeight: 1, letterSpacing: nameSpacing, transform: nameFlip ? "translateX(-6px)" : "translateX(6px)", whiteSpace: "nowrap" }}>{name}</span>
      <span style={{ fontFamily: "Anton, sans-serif", fontSize: "160px", color: "rgba(236, 207, 157, 0.80)", position: "absolute", fontStyle: "italic", lineHeight: 1, letterSpacing: nameSpacing, transform: nameFlip ? "translateX(6px)" : "translateX(-6px)", whiteSpace: "nowrap" }}>{name}</span>
    </div>
  );
}

// Mobile double-layer name
function MobileLayeredName({ name, nameSpacingMobile }: { name: string; nameSpacingMobile: string }) {
  return (
    <div className="relative flex items-center justify-center w-full" style={{ height: "110px", backgroundColor: "#A0C5D1", overflow: "hidden" }}>
      <span style={{ fontFamily: "Anton, sans-serif", fontSize: "90px", color: "#14499C", position: "absolute", fontStyle: "italic", lineHeight: 1, letterSpacing: nameSpacingMobile, transform: "translate(-49%, -50%)", top: "50%", left: "50%", whiteSpace: "nowrap" }}>{name}</span>
      <span style={{ fontFamily: "Anton, sans-serif", fontSize: "90px", color: "rgba(236, 207, 157, 0.80)", position: "absolute", fontStyle: "italic", lineHeight: 1, letterSpacing: nameSpacingMobile, transform: "translate(-47%, -50%)", top: "50%", left: "50%", whiteSpace: "nowrap" }}>{name}</span>
    </div>
  );
}

// Shining icon
function ShineIcon({ src, alt, style }: { src: string; alt: string; style: React.CSSProperties }) {
  const ref = useShine<HTMLDivElement>("shine-icon-wrap");
  return (
    <div ref={ref} style={{ position: "absolute", ...style }}>
      <img src={src} alt={alt} style={{ display: "block", width: "100%", height: "100%", objectFit: "contain" }} />
    </div>
  );
}

// Shining name wrapper
function ShineName({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const ref = useShine<HTMLDivElement>("shine-name-wrap");
  return (
    <div ref={ref} style={{ position: "relative", overflow: "hidden", ...style }}>
      {children}
    </div>
  );
}

function StarBarWithIcon({ iconSrc, position, size, offset, nudgeUp = "0px" }: {
  iconSrc: string; position: "left" | "right"; size: string; offset: string; nudgeUp?: string;
}) {
  return (
    <div style={{ backgroundColor: "#111E33", width: "100%", height: "60px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 40 }}>
      <img src="/GK_about_photos/star_bar.svg" alt="decorative star bar" style={{ display: "block", height: "100%", width: "100%" }} />
      <ShineIcon src={iconSrc} alt="icon"
        style={{ height: size, width: "auto", [position]: offset, top: "50%", transform: `translateY(calc(-50% - ${nudgeUp}))`, zIndex: 50 }}
      />
    </div>
  );
}

function MobileStarBarWithIcon({ iconSrc, size, nudgeUp = "0px" }: { iconSrc: string; size: string; nudgeUp?: string; }) {
  return (
    <div style={{ backgroundColor: "#111E33", width: "100%", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 40 }}>
      <img src="/GK_about_photos/star_bar_mobile.svg" alt="decorative star bar" style={{ display: "block", height: "100%", width: "100%" }} />
      <ShineIcon src={iconSrc} alt="icon"
        style={{ height: size, width: "auto", top: "50%", left: "50%", transform: `translate(-50%, calc(-50% - ${nudgeUp}))`, zIndex: 50 }}
      />
    </div>
  );
}

// Main page
export default function About() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const desktopIcons = [
    { src: "/GK_about_photos/logo.png",       pos: "left" as const,  size: "150px", offset: "3%" },
    { src: "/GK_about_photos/microphone.png", pos: "right" as const, size: "330px", offset: "3%" },
    { src: "/GK_about_photos/guitar.png",     pos: "left" as const,  size: "270px", offset: "3%", nudgeUp: "8px" },
    { src: "/GK_about_photos/drum.png",       pos: "right" as const, size: "240px", offset: "6%" },
    { src: "/GK_about_photos/guitar2.png",    pos: "left" as const,  size: "320px", offset: "3%", nudgeUp: "60px" },
  ];

  const mobileIcons = [
    { src: "/GK_about_photos/logo.png",       size: "82px"  },
    { src: "/GK_about_photos/microphone.png", size: "145px" },
    { src: "/GK_about_photos/guitar.png",     size: "145px", nudgeUp: "5px" },
    { src: "/GK_about_photos/drum.png",       size: "122px" },
    { src: "/GK_about_photos/guitar2.png",    size: "195px", nudgeUp: "35px" },
  ];

  return (
    <main style={{ backgroundColor: "#111E33", fontFamily: "Saira, sans-serif" }}>

      {/* Shine styles */}
      <style>{`
        /* ── Icon sparkle ── */
        .shine-icon-wrap {
          transition: filter 0.3s ease-out;
        }
        .shine-icon-wrap.show {
          animation: icon-sparkle 2.4s ease-in-out forwards;
        }
        @keyframes icon-sparkle {
          0%   { filter: drop-shadow(0 0 0px  rgba(255,255,255,0)); }
          40%  { filter: drop-shadow(0 0 22px rgba(255,255,230,1)) drop-shadow(0 0 40px rgba(255,240,180,0.6)); }
          100% { filter: drop-shadow(0 0 0px  rgba(255,255,255,0)); }
        }

        /* ── Name shine ── */
        .shine-name-wrap {
          opacity: 1;
        }
        .shine-name-wrap.show::after {
          content: '';
          position: absolute;
          top: -10%;
          left: -75%;
          width: 60%;
          height: 120%;
          background: linear-gradient(
            to right,
            rgba(255,255,255,0)   0%,
            rgba(255,255,255,0.85) 50%,
            rgba(255,255,255,0)   100%
          );
          transform: skewX(-20deg);
          mix-blend-mode: overlay;
          animation: shine-sweep 2.2s ease-out forwards;
          pointer-events: none;
        }

        @keyframes shine-sweep {
          0%   { left: -75%; }
          100% { left: 125%; }
        }
      `}</style>

      {/* Top red bar */}
      <div style={{ width: "100%", height: "5px", backgroundColor: "#BF0702" }} />

      {isMobile ? (
        /* ── MOBILE ── */
        <>
          <section className="relative w-full overflow-hidden" style={{ minHeight: "100vh" }}>
            <img src="/GK_about_photos/hero_bg_mobile.png" alt="Good Karma band background" className="absolute inset-0 w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 flex flex-col items-center justify-start pt-16 z-10">
              <div className="relative flex items-center justify-center" style={{ height: "180px" }}>
                <h1 style={{ fontFamily: "Anton, sans-serif", fontSize: "58px", color: "#14499C", position: "absolute", fontStyle: "italic", lineHeight: 1.4, letterSpacing: "4px", transform: "translateX(-2px)", textAlign: "center", whiteSpace: "pre-line" }}>{`WHATEVER\nYOU DO,\nMAKE IT`}</h1>
                <h1 style={{ fontFamily: "Anton, sans-serif", fontSize: "58px", color: "rgba(174, 223, 236, 0.75)", position: "absolute", fontStyle: "italic", lineHeight: 1.4, letterSpacing: "4px", transform: "translateX(4px)", textAlign: "center", whiteSpace: "pre-line" }}>{`WHATEVER\nYOU DO,\nMAKE IT`}</h1>
              </div>
            </div>
            <img src="/GK_about_photos/hero_fg_mobile.png" alt="Good Karma band" className="absolute left-1/2" style={{ transform: "translateX(-50%)", width: "100%", objectFit: "contain", zIndex: 30, top: "205px" }} />
            <div className="absolute z-10" style={{ bottom: "10px", left: "50%", transform: "translateX(-50%)" }}>
              <div className="relative flex items-center justify-center" style={{ height: "220px" }}>
                <h1 style={{ fontFamily: "Anton, sans-serif", fontSize: "175px", color: "#14499C", position: "absolute", lineHeight: 1, letterSpacing: "20px", transform: "translateX(3px)" }}>{heroHeadline2}</h1>
                <h1 style={{ fontFamily: "Anton, sans-serif", fontSize: "175px", color: "rgba(174, 223, 236, 0.75)", position: "absolute", lineHeight: 1, letterSpacing: "20px", transform: "translateX(15px)" }}>{heroHeadline2}</h1>
              </div>
            </div>
          </section>

          {members.map((member, index) => (
            <div key={member.name}>
              <MobileStarBarWithIcon iconSrc={mobileIcons[index].src} size={mobileIcons[index].size} nudgeUp={(mobileIcons[index] as any).nudgeUp} />
              <ShineName style={{ backgroundColor: "#A0C5D1" }}>
                <MobileLayeredName name={member.name} nameSpacingMobile={member.nameSpacingMobile} />
              </ShineName>
              <div className="relative w-full overflow-hidden" style={{ height: "400px" }}>
                <img src={member.bgPhoto} alt={`${member.name} background`} className="absolute inset-0 w-full h-full object-cover" />
                <img src={member.fgPhoto} alt={`${member.name} performing`} className="absolute bottom-0 left-1/2" style={member.fgStyleMobile} />
              </div>
              <div style={{ backgroundColor: "#111E33", border: `2px solid ${member.bioBorder}`, padding: "20px" }}>
                <p style={{ fontFamily: "Saira, sans-serif", fontSize: "16px", lineHeight: "180%", color: member.bioBorder }}>{member.bio}</p>
              </div>
            </div>
          ))}
          <MobileStarBarWithIcon iconSrc={mobileIcons[4].src} size={mobileIcons[4].size} nudgeUp={(mobileIcons[4] as any).nudgeUp} />
        </>

      ) : (
        /* ── DESKTOP ── */
        <>
          <section className="relative w-full overflow-hidden" style={{ minHeight: "100vh" }}>
            <img src="/GK_about_photos/hero_bg.png" alt="Good Karma band background" className="absolute inset-0 w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 flex flex-col items-center justify-start pt-12 z-10">
              <div className="relative flex items-center justify-center" style={{ height: "140px" }}>
                <h1 style={{ fontFamily: "Anton, sans-serif", fontSize: "85px", color: "#111E33", position: "absolute", fontStyle: "italic", lineHeight: 1, letterSpacing: "6px", transform: "translateX(-2px)", whiteSpace: "nowrap" }}>{heroHeadline1}</h1>
                <h1 style={{ fontFamily: "Anton, sans-serif", fontSize: "85px", color: "rgba(174, 223, 236, 0.75)", position: "absolute", fontStyle: "italic", lineHeight: 1, letterSpacing: "6px", transform: "translateX(7px)", whiteSpace: "nowrap" }}>{heroHeadline1}</h1>
              </div>
              <div className="relative flex items-center justify-center" style={{ height: "420px", zIndex: 10 }}>
                <h1 style={{ fontFamily: "Anton, sans-serif", fontSize: "420px", color: "#14499C", position: "absolute", lineHeight: 1, letterSpacing: "105px", transform: "translateX(38px)" }}>{heroHeadline2}</h1>
                <h1 style={{ fontFamily: "Anton, sans-serif", fontSize: "420px", color: "rgba(174, 223, 236, 0.75)", position: "absolute", lineHeight: 1, letterSpacing: "105px", transform: "translateX(62px)" }}>{heroHeadline2}</h1>
              </div>
            </div>
            <img src="/GK_about_photos/hero_fg.png" alt="Good Karma band" className="absolute bottom-0 left-1/2" style={{ transform: "translateX(-50%)", width: "105%", maxWidth: "1400px", objectFit: "contain", zIndex: 30 }} />
          </section>

          {members.map((member, index) => (
            <div key={member.name}>
              <StarBarWithIcon iconSrc={desktopIcons[index].src} position={desktopIcons[index].pos} size={desktopIcons[index].size} offset={desktopIcons[index].offset} nudgeUp={(desktopIcons[index] as any).nudgeUp} />
              <section className="relative w-full flex" style={{ minHeight: "800px", flexDirection: member.flip ? "row-reverse" : "row" }}>
                <div className="relative overflow-hidden" style={{ width: "55%" }}>
                  <img src={member.bgPhoto} alt={`${member.name} performing background`} className="absolute inset-0 w-full h-full object-cover" />
                  <img
                    src={member.fgPhoto}
                    alt={`${member.name} performing`}
                    className="absolute bottom-0"
                    style={{
                      right: member.flip ? "0" : "auto",
                      left: member.flip ? "auto" : "50%",
                      transform: member.flip ? "none" : "translateX(-50%)",
                      maxHeight: member.flip ? "110%" : "95%",
                      objectFit: "contain",
                      zIndex: 2,
                    }}
                  />
                </div>
                <div className="flex flex-col" style={{ width: "45%", backgroundColor: "#111E33" }}>
                  {member.flip ? (
                    <div className="flex flex-row" style={{ height: "100%" }}>
                      <ShineName style={{ backgroundColor: "#A0C5D1", display: "flex", alignItems: "center", justifyContent: "center", padding: "8px 12px", position: "relative" }}>
                        <span style={{ fontFamily: "Anton, sans-serif", fontSize: "160px", fontStyle: "italic", lineHeight: 1, letterSpacing: member.nameSpacing, writingMode: "vertical-rl", transform: "rotate(180deg) translateY(6px)", color: "#14499C", position: "absolute" }}>{member.name}</span>
                        <span style={{ fontFamily: "Anton, sans-serif", fontSize: "160px", fontStyle: "italic", lineHeight: 1, letterSpacing: member.nameSpacing, writingMode: "vertical-rl", transform: "rotate(180deg) translateY(-6px)", color: "rgba(236, 207, 157, 0.80)", position: "absolute" }}>{member.name}</span>
                        <span style={{ fontFamily: "Anton, sans-serif", fontSize: "160px", fontStyle: "italic", lineHeight: 1, letterSpacing: member.nameSpacing, writingMode: "vertical-rl", visibility: "hidden" }}>{member.name}</span>
                      </ShineName>
                      <div style={{ flex: 1, backgroundColor: "#111E33", border: `4px solid ${member.bioBorder}`, padding: "24px", display: "flex", alignItems: "center" }}>
                        <p style={{ fontFamily: "Saira, sans-serif", fontSize: "28px", lineHeight: "220%", color: member.bioBorder }}>{member.bio}</p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <ShineName style={{ backgroundColor: "#A0C5D1", padding: "2px 32px", flex: "0 0 auto" }}>
                        <LayeredName name={member.name} nameSpacing={member.nameSpacing} nameFlip={member.nameFlip} />
                      </ShineName>
                      <div style={{ backgroundColor: "#111E33", border: `4px solid ${member.bioBorder}`, padding: "24px 32px", flex: "1 1 auto", display: "flex", alignItems: "center" }}>
                        <p style={{ fontFamily: "Saira, sans-serif", fontSize: "28px", lineHeight: "220%", color: member.bioBorder }}>{member.bio}</p>
                      </div>
                    </>
                  )}
                </div>
              </section>
            </div>
          ))}
          <StarBarWithIcon iconSrc={desktopIcons[4].src} position={desktopIcons[4].pos} size={desktopIcons[4].size} offset={desktopIcons[4].offset} nudgeUp={(desktopIcons[4] as any).nudgeUp} />
        </>
      )}

      {/* Bottom red bar */}
      <div style={{ width: "100%", height: "5px", backgroundColor: "#BF0702" }} />
    </main>
  );
}