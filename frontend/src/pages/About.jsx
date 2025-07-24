import React, { useRef} from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(useGSAP, SplitText);

const About = () => {
  const headingRef = useRef();
  const imageRef = useRef();
  const paragraphRef = useRef();

  const paragraphHTML = `
    <p>
      <strong>Founded in 2020</strong>, <span class="highlight">Paper Rex™</span> is a Singapore-based
      gaming organization built at the crossroads of entertainment,
      competitive esports, and merchandise.<br /><br />
      <span class="highlight">Paper Rex™</span> is a VALORANT Champions Tour (VCT) Pacific partnered
      organization with Riot Games.<br /><br />
      The <span class="highlight">Paper Rex</span> VALORANT team is among the world’s top performing
      teams. In 2023, <span class="highlight">Paper Rex</span> emerged champions of the inaugural VCT
      Pacific Playoffs. To date, the team holds the record for most
      international VCT events attended (11), and has accumulated over 
      <strong>US$1.5 million</strong> in prize winnings. Most recently,
      <span class="highlight">Paper Rex</span> were crowned the champions of 
      <strong> VCT Masters Toronto 2025!</strong><br /><br />
      Our vision is to give every gamer something to look forward to,
      something to get behind, and something they can call their own.
    </p>
  `;

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Animate heading (chars/words)
      const headingSplit = new SplitText(headingRef.current, {
        type: "chars, words",
      });

      gsap.from(headingSplit.chars, {
        opacity: 0,
        y: 100,
        rotateX: 90,
        skewX: 20,
        duration: 1,
        ease: "back.out(1.7)",
        delay:1,
        stagger: {
          each: 0.03,
          from: "start",
        },
      });
      const paragraphSplit = new SplitText(paragraphRef.current, {
        type: "lines",
      });

      gsap.from(paragraphSplit.lines, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out",
        stagger: 0.1,
        delay: 2,
      });

      gsap.from(imageRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        delay: 1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full bg-[#0f0f0f] text-[#e3ecdb]">
      <div className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 py-10 gap-10">
        <header className="text-center">
          <h1
            ref={headingRef}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold"
          >
            Built On Dreams
          </h1>
        </header>

        <div className="w-full flex flex-col lg:flex-row gap-10 max-w-7xl items-center">
          <div ref={imageRef} className="w-full lg:w-1/2">
            <img
              loading="lazy"
              src="https://pprx.team/media/pages/about/jan-2020-lineup/6658d1dc31-1745917456/pprx-lineup.jpg"
              alt="Paper Rex Lineup"
              className="w-full h-auto object-contain rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>

          <article
            ref={paragraphRef}
            className="w-full lg:w-1/2 text-sm sm:text-base md:text-lg leading-relaxed tracking-wide [&_.highlight]:text-[#ff0099] [&_.highlight]:font-semibold"
            dangerouslySetInnerHTML={{ __html: paragraphHTML }}
          ></article>
        </div>
      </div>
    </div>
  );
};

export default About;
