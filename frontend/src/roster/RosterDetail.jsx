import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FaXTwitter, FaInstagram, FaFacebook, FaTwitch, FaYoutube } from "react-icons/fa6";

const rosterData = {
  f0rsakeN: {
    imgIndex: 0,
    description: "Flex Master with sharp aim and unpredictable playstyle.",
    fname:"Jason",
    lname:"Susanto",
    ign:"f0rsakeN",
    x:"https://x.com/jasonsusantoo",
    twitch:"https://www.twitch.tv/prxf0rsakeN",
    insta:"https://www.instagram.com/jasonsusantoo/",
    fb:"https://www.facebook.com/jason.susanto.501",
    yt:"https://www.youtube.com/channel/UCF0yQlTydGAnfpbO5f2xtng"
  },
  something: {
    imgIndex: 1,
    description: "Aggressive duelist who thrives in high-pressure situations.",
    fname:"Ilia",
    lname:"Petrov",
    ign:"something",
    x:"https://x.com/smthlikeyou11/",
    twitch:"",
    insta:"https://www.instagram.com/smthlikeyou11/",
    fb:"",
    yt:"https://www.youtube.com/@smthlikeyou"
  },
  d4v41: {
    imgIndex: 2,
    description:"The backbone of PRX’s defense, anchoring sites with calm precision and game sense.",
    fname:"Khalish",
    lname:"Rusyaidee",
    ign:"d4v41",
    x:"https://x.com/prxd4v41",
    twitch:"https://www.twitch.tv/prxd4v41",
    insta:"https://www.instagram.com/khalish.rusyaidee",
    fb:"https://www.facebook.com/CSGOd4v41/",
    yt:"https://www.youtube.com/channel/UCLuFyZMAoz1HAluiW-90X-A"
  },
  mindfreak: {
    imgIndex: 3,
    description: "Support player and in-game leader, calm under pressure.",
    fname:"Aaron",
    lname:"Leonhart",
    ign:"mindfreak",
    x:"https://x.com/aaronleonhart4/",
    twitch:"https://www.twitch.tv/prxmindfreak/",
    insta:"https://www.instagram.com/aaronleonhart4/",
    fb:"https://www.facebook.com/mindfreakcs/",
    yt:"https://www.youtube.com/chann el/UCZz6G1kmkdTw3S9NXn25juw/videos"
  },
  Jinggg: {
    imgIndex: 4,
    description: "Entry fragger known for his explosive plays and clutch potential.",
    fname:"Wang",
    lname:"Jing Jie",
    ign:"Jinggg",
    x:"https://x.com/Jingggxd",
    twitch:"https://www.twitch.tv/jingggxd",
    insta:"https://www.instagram.com/jingggxd/",
    fb:"",
    yt:"https://www.youtube.com/@prxjinggg/featured"
  },
  PatMen: {
    imgIndex: 5,
    description: "Master of flanks and timings. A strategic genius.",
    fname:"Patrick",
    lname:"Mendoza",
    ign:"PatMen",
    x:"https://x.com/patmenVLR/",
    twitch:"https://www.twitch.tv/patmenVLR",
    insta:"",
    fb:"",
    yt:""
  },
};

const RosterDetail = () => {
  const { name } = useParams();
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const player = rosterData[name];

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1 } });

    tl.from(containerRef.current, { opacity: 0, y: 100 })
      .from(imageRef.current, { x: -100, opacity: 0 }, "<0.3")
      .from(textRef.current, { opacity: 0, y: 50 }, "-=0.5");

    gsap.to(imageRef.current, {
      scale: 1.05,
      duration: 0.3,
      paused: true,
      ease: "power2.out",
      onStart() {
        imageRef.current.addEventListener("mouseenter", () => gsap.to(imageRef.current, { scale: 1.1, duration: 0.3 }));
        imageRef.current.addEventListener("mouseleave", () => gsap.to(imageRef.current, { scale: 1.05, duration: 0.3 }));
      }
    });
  }, []);

  if (!player) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-black text-white">
        <h1 className="text-red-500 text-2xl">User not found</h1>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#0f0f0f] text-[#e3ecdb] flex items-center justify-center px-4 py-16">
      <div ref={containerRef} className="w-full max-w-7xl flex flex-col lg:flex-row items-center gap-10">
        
        <div className="w-1/2 lg:w-2/5 flex justify-center">
          <img
            ref={imageRef}
            src={`/team_imgs/${player.imgIndex + 1}.jpg`}
            alt={`Profile of ${player.fname}`}
            className="w-28 h-20 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 rounded object-cover shadow-xl"
          />
        </div>

        <div ref={textRef} className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            <span>{player.fname} </span>
            <span className="text-[#ff0099]">{player.ign}</span>
            <span> {player.lname}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">{player.description}</p>

          <div className="flex gap-4 justify-center lg:justify-start mt-2 text-xl text-[#ff0099]">
            {player.x && <a href={player.x} target="_blank" rel="noreferrer"><FaXTwitter /></a>}
            {player.twitch && <a href={player.twitch} target="_blank" rel="noreferrer"><FaTwitch /></a>}
            {player.insta && <a href={player.insta} target="_blank" rel="noreferrer"><FaInstagram /></a>}
            {player.fb && <a href={player.fb} target="_blank" rel="noreferrer"><FaFacebook /></a>}
            {player.yt && <a href={player.yt} target="_blank" rel="noreferrer"><FaYoutube /></a>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RosterDetail;
