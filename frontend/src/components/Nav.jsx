import React, { useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../components/Nav.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Nav = ({ containerRef }) => {
  const links = ['HOME', 'ROSTER', 'PRODUCTS', 'ABOUT', 'PROFILE'];
  const location = useLocation();

  const menuToggle = useRef();
  const menuOverlay = useRef();
  const menuContent = useRef();
  const menuPreviewImg = useRef();
  const menuLinks = useRef([]);
  const open = useRef();
  const close = useRef();

  const isOpen = useRef(false);
  const isAnimating = useRef(false);

  const { contextSafe } = useGSAP();

  const cleanupPreviewImages = contextSafe(() => {
    if (!menuPreviewImg.current) return;
    const previewImages = menuPreviewImg.current.querySelectorAll('img');
    if (previewImages.length > 2) {
      for (let i = 0; i < previewImages.length - 2; i++) {
        menuPreviewImg.current.removeChild(previewImages[i]);
      }
    }
  });

  const resetPreviewImage = contextSafe(() => {
    const currentPath = location.pathname.split("/")[1];
    const index = links.findIndex((link) => link.toLowerCase() === currentPath);
    const imgSrc = `/preview_imgs/img-${index >= 0 ? index + 1 : 1}.jpg`;

    const newPreviewImg = document.createElement('img');
    newPreviewImg.src = imgSrc;
    newPreviewImg.style.opacity = '0';
    newPreviewImg.style.transform = 'scale(1.25) rotate(10deg)';
    menuPreviewImg.current.appendChild(newPreviewImg);

    cleanupPreviewImages();

    gsap.to(newPreviewImg, {
      opacity: 1,
      scale: 1,
      rotation: 0,
      duration: 0.75,
      ease: 'power2.out',
    });
  });

  const animateMenuToggle = contextSafe((isOpening) => {
    gsap.to(isOpening ? open.current : close.current, {
      x: isOpening ? -5 : 5,
      y: isOpening ? -10 : 10,
      rotation: isOpening ? -5 : 5,
      opacity: 0,
      delay: 0.25,
      duration: 0.5,
      ease: 'power2.out',
    });

    gsap.to(isOpening ? close.current : open.current, {
      x: 0,
      y: 0,
      rotation: 0,
      opacity: 1,
      delay: 0.5,
      duration: 0.5,
      ease: 'power2.out',
    });
  });

  const openMenu = contextSafe(() => {
    if (isAnimating.current || isOpen.current) return;
    isAnimating.current = true;

    gsap.to(containerRef.current, {
      rotation: 10,
      x: 360,
      y: 450,
      scale: 1.5,
      duration: 1.25,
      ease: 'power4.inOut',
    });

    animateMenuToggle(true);

    gsap.to(menuContent.current, {
      rotation: 0,
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      duration: 1.25,
      ease: 'power4.inOut',
    });

    gsap.to(['.link a', '.social a'], {
      y: '0%',
      opacity: 1,
      duration: 1,
      delay: 0.75,
      stagger: 0.1,
      ease: 'power3.out',
    });

    gsap.to(menuOverlay.current, {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 175%, 0% 100%)',
      duration: 1.25,
      ease: 'power4.inOut',
      onComplete: () => {
        isOpen.current = true;
        isAnimating.current = false;
      },
    });
  });

  const closeMenu = contextSafe(() => {
    if (isAnimating.current || !isOpen.current) return;
    isAnimating.current = true;

    gsap.to(containerRef.current, {
      rotation: 0,
      x: 0,
      y: 0,
      scale: 1,
      duration: 1.25,
      ease: 'power4.inOut',
    });

    animateMenuToggle(false);

    gsap.to(menuContent.current, {
      rotation: -15,
      x: -100,
      y: -100,
      scale: 1.5,
      opacity: 0.25,
      duration: 1.25,
      ease: 'power4.inOut',
    });

    gsap.to(menuOverlay.current, {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
      duration: 1.25,
      ease: 'power4.inOut',
      onComplete: () => {
        isOpen.current = false;
        isAnimating.current = false;
      },
    });
  });

  const menuToggleEvent = contextSafe(() => {
    if (!isOpen.current) openMenu();
    else closeMenu();
  });

  const handlePreviewHover = contextSafe((index) => {
    if (!isOpen.current || isAnimating.current) return;
    const imgSrc = `/preview_imgs/img-${index + 1}.jpg`;

    const previewImages = menuPreviewImg.current.querySelectorAll('img');
    if (
      previewImages.length > 0 &&
      previewImages[previewImages.length - 1].src.endsWith(imgSrc)
    )
      return;

    const newPreviewImg = document.createElement('img');
    newPreviewImg.src = imgSrc;
    newPreviewImg.style.opacity = '0';
    newPreviewImg.style.transform = 'scale(1.25) rotate(10deg)';
    menuPreviewImg.current.appendChild(newPreviewImg);

    cleanupPreviewImages();

    gsap.to(newPreviewImg, {
      opacity: 1,
      scale: 1,
      rotation: 0,
      duration: 0.75,
      ease: 'power2.out',
    });
  });

  const handlePreviewReset = contextSafe(() => {
    if (!isOpen.current || isAnimating.current) return;
    resetPreviewImage();
  });
  useEffect(() => {
    resetPreviewImage();
  }, []);
  useEffect(() => {
    if (!isOpen.current) {
      resetPreviewImage();
    }
  }, [location.pathname]);

  return (
    <>
      <nav className='navbar'>
        <div className="logo">
          <NavLink>PaperRex</NavLink>
        </div>
        <div ref={menuToggle} onClick={menuToggleEvent} className="menu-toggle">
          <p ref={open} id="menu-open">Menu</p>
          <p ref={close} id="menu-close">Close</p>
        </div>
      </nav>

      <div ref={menuOverlay} className="menu-overlay">
        <div ref={menuContent} className="menu-content">
          <div className="menu-items">
            <div className="col-lg">
              <div ref={menuPreviewImg} className="menu-preview-img" />
            </div>
            <div className="col-sm">
              <div className="menu-links">
                {links.map((text, index) => (
                  <div className="link" key={index}>
                    <NavLink
                      to={`/${text.toLowerCase()}`}
                      data-img={`/preview_imgs/img-${index + 1}.jpg`}
                      ref={(el) => (menuLinks.current[index] = el)}
                      onClick={() => closeMenu()}
                      onMouseEnter={() => handlePreviewHover(index)}
                      onMouseLeave={handlePreviewReset}
                    >
                      {text}
                    </NavLink>
                  </div>
                ))}
              </div>

              <div className="menu-socials">
                <div className="social"><a href="https://www.youtube.com/@PaperRex/videos" target='_blank'>Youtube</a></div>
                <div className="social"><a href="https://www.instagram.com/pprxteam/?hl=en" target='_blank' >Instagram</a></div>
                <div className="social"><a href="https://x.com/pprxteam?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target='_blank'>X</a></div>
                <div className="social"><a href="https://www.linkedin.com/company/paper-rex/?originalSubdomain=sg" target='_blank'>LinkedIn</a></div>
              </div>
            </div>
          </div>
          <div className="menu-footer" />
        </div>
      </div>
    </>
  );
};

export default Nav;
