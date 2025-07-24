import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import { useNavigate } from "react-router-dom";
import "../roster/roster.css"
gsap.registerPlugin(SplitText);
const NAMES = [
  "f0rsakeN",
  "something",
  "d4v41",
  "mindfreak",
  "Jinggg",
  "PatMen",
];

const DEFAULT_NAME = "#W-GAMING";
const Roster = () => {
  const imgRef = useRef([]);
  const nameRef = useRef([]);
  const default_nameRef = useRef([]);
  const profile_containerRef = useRef(null);
  const setimgRef = (e, index) => {
    if (e) imgRef.current[index] = e;
  };
  const setnameRef = (e, index) => {
    if (e) nameRef.current[index] = e;
  };
  const navigate = useNavigate();

 const handleClick = (name) => {
  navigate(`/roster/${name}`);
};
  useGSAP(() => {
    const nameHeadings = nameRef.current.map((ref) => ref?.querySelector("h1"));
    nameHeadings.forEach((heading) => {
      if (!heading) return;
      const split = new SplitText(heading, { type: "chars" });
      split.chars.forEach((char) => char.classList.add("letter"));
    });
    gsap.from(".img", {
      y: 100,
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: "power4.out",
      stagger:{
          each: 0.050,
          from: "center",
      },
      delay: 0.2,
    });
    const defaultNameEl = nameRef.current[0];
    if (defaultNameEl) {
      default_nameRef.current = Array.from(
        defaultNameEl.querySelectorAll(".letter")
      );
      gsap.to(default_nameRef.current, {
        y: "100%",
        ease: "power4.out",
        duration: 1,
        stagger: {
          each: 0.025,
          from: "center",
        },
        delay:0.2,
      });
    }

    const handleMouseEnter = (imageEl, index) => {
      const nameEl = nameRef.current[index + 1];
      const letters = nameEl?.querySelectorAll(".letter");
      if (!letters?.length) return;

      gsap.to(imageEl, {
        width: 140,
        height: 140,
        duration: 0.5,
        ease: "power4.out",
      });
      gsap.to(letters, {
        y: "-100%",
        ease: "power4.out",
        duration: 0.75,
        stagger: {
          each: 0.025,
          from: "center",
        },
      });
    };

    const handleMouseLeave = (imageEl, index) => {
      const nameEl = nameRef.current[index + 1];
      const letters = nameEl.querySelectorAll(".letter");
      if (!letters) return;

      gsap.to(imageEl, {
        width: 70,
        height: 70,
        duration: 0.5,
        ease: "power4.out",
      });
      gsap.to(letters, {
        y: "0%",
        ease: "power4.out",
        duration: 0.75,
        stagger: {
          each: 0.025,
          from: "center",
        },
      });
    };
    imgRef.current.forEach((img, i) => {
      const onEnter = () => handleMouseEnter(img, i);
      const onLeave = () => handleMouseLeave(img, i);

      img.addEventListener("mouseenter", onEnter);
      img.addEventListener("mouseleave", onLeave);

      return () => {
        img.removeEventListener("mouseenter", onEnter);
        img.removeEventListener("mouseleave", onLeave);
      };
    });

    const container = profile_containerRef.current;
    if (container) {
      const showDefault = () => {
        gsap.to(default_nameRef.current, {
          y: "0%",
          ease: "power4.out",
          duration: 0.75,
          stagger: {
            each: 0.025,
            from: "center",
          },
        });
      };

      const hideDefault = () => {
        gsap.to(default_nameRef.current, {
          y: "100%",
          ease: "power4.out",
          duration: 0.75,
          stagger: {
            each: 0.025,
            from: "center",
          },
        });
      };
      container.addEventListener("mouseenter", showDefault);
      container.addEventListener("mouseleave", hideDefault);
      return () => {
        container.removeEventListener("mouseenter", showDefault);
        container.removeEventListener("mouseleave", hideDefault);
      };
    }
  }, []);

  return (
    <section className="team">
      <div className="profile-images" ref={profile_containerRef}>
        {NAMES.map((_, i) => (
          <div key={i} ref={(e) => setimgRef(e, i)} className="img"
            onClick={() => handleClick(NAMES[i])}>
            <img src={`/team_imgs/${i + 1}.jpg`} alt={NAMES[i]} />
          </div>
        ))}
      </div>
      <div className="profile-name">
        <div className="name default" ref={(e) => setnameRef(e, 0)}>
          <h1>{DEFAULT_NAME}</h1>
        </div>

        {NAMES.map((name, i) => (
          <div key={name} ref={(e) => setnameRef(e, i + 1)} className="name">
            <h1>{name}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Roster;
