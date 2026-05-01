import React from "react";

export const heroHeadline1 = "WHATEVER YOU DO, MAKE IT";
export const heroHeadline2 = "GOOD";

export interface Member {
  name: string;
  bio: string;
  bgPhoto: string;
  fgPhoto: string;
  instrument: string;
  instrumentIcon: string;
  flip: boolean;
  bioColor: string;
  bioBorder: string;
  nameSpacing: string;
  nameSpacingMobile: string;
  nameFlip: boolean;
  fgStyleMobile: React.CSSProperties;
  fgStyleDesktop?: React.CSSProperties;
}

export const members: Member[] = [
  {
    name: "KAVOI",
    bio : "Hey I'm Kavoi, I'm from Boston, and I'm a big sci-fi fan! I majored in physics, and I met Brody in 2022. I set the band up with songs I had written, and a lot of what we play currently are things I wrote myself. Now, we're getting into the era of collaboration. I'm a big punk rock fan, and Brody and I hit it off because we actually had such varied and diverse music taste.",
    bgPhoto: "/GK_about_photos/kavoi_bg.png",
    fgPhoto: "/GK_about_photos/kavoi_fg.png",
    instrument: "Microphone",
    instrumentIcon: "/GK_about_photos/microphone.png",
    flip: false,
    bioColor: "rgba(236, 207, 157, 0.5)",
    bioBorder: "#ECCF9D",
    nameSpacing: "40px",
    nameSpacingMobile: "20px",
    nameFlip: false,
    fgStyleMobile: { transform: "translateX(-50%)", maxHeight: "100%", objectFit: "contain", zIndex: 2 },
  },
  {
    name: "RAMON",
    bio: "Hey I'm Ramon! I'm from Connecticut, but I moved to California when I was 8. That's when I fell in love with music, as I admired the rock culture in the Bay Area. I came to Boston for college and met Good Karma. Initially I filled in for drums, but now I am the band's rhythm guitarist. I am a big fan of basketball (go Warriors), movies, and Pokemon, and history!",
    bgPhoto: "/GK_about_photos/ramon_bg.png",
    fgPhoto: "/GK_about_photos/ramon_fg.png",
    instrument: "Guitar",
    instrumentIcon: "/GK_about_photos/guitar.png",
    flip: true,
    bioColor: "rgba(241, 177, 53, 0.5)",
    bioBorder: "#F1B135",
    nameSpacing: "48px",
    nameSpacingMobile: "18px",
    nameFlip: true,
    fgStyleMobile: { transform: "translateX(-35%)", maxHeight: "100%", objectFit: "contain", zIndex: 2, position: "absolute", bottom: "0px" },
    fgStyleDesktop: { position: "absolute", right: 0, bottom: "18px", maxHeight: "110%", objectFit: "contain", zIndex: 2 },
  },
  {
    name: "TAI",
    bio: "Hi I'm Tai, and I'm from the Bay Area, close to San Jose! I used to do marching band (snare lines), and was thw foundation for my drumming skills. I'm a big punk fan (like the rest of the band), and I love to snowboard. I met some members of the band online. I'm pretty good at Speedrunners (the video game), and I'm a big GTA fan. I also am into driving and racing scenic paths.",
    bgPhoto: "/GK_about_photos/tai_bg.png",
    fgPhoto: "/GK_about_photos/tai_fg.png",
    instrument: "Drums",
    instrumentIcon: "/GK_about_photos/drum.png",
    flip: false,
    bioColor: "rgba(238, 133, 9, 0.5)",
    bioBorder: "#EE8509",
    nameSpacing: "80px",
    nameSpacingMobile: "45px",
    nameFlip: false,
    fgStyleMobile: { transform: "translateX(-50%)", maxHeight: "100%", objectFit: "contain", zIndex: 2 },
  },
  {
    name: "BRODY",
    bio: "Hi I'm Brody, and I play bass in Good Karma! I do backing vocals, and Kavoi and I started the band in 2022. We met online in 2021, through a musician meetup site. I'm from Connecticut and moved to Boston in 2021 after I graduated college. I'm a big reader, and I'm in a book club with my friends where we read horror books. I also scare act in a haunted house during the fall!",
    bgPhoto: "/GK_about_photos/brody_bg.png",
    fgPhoto: "/GK_about_photos/brody_fg.png",
    instrument: "Guitar",
    instrumentIcon: "/GK_about_photos/guitar2.png",
    flip: true,
    bioColor: "rgba(236, 207, 157, 0.5)",
    bioBorder: "#ECCF9D",
    nameSpacing: "58px",
    nameSpacingMobile: "24px",
    nameFlip: true,
    fgStyleMobile: { transform: "translateX(-20%)", maxHeight: "87%", objectFit: "contain", zIndex: 2 },
  },
];