import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import { vertexShader, fluidShader, displayShader } from "../shaders/shaders";

gsap.registerPlugin(SplitText);

const FluidCanvas = () => {
  const useResponsiveLogoSize = () => {
    const [size, setSize] = useState({ width: 200, height: 100 });

    useEffect(() => {
      const updateSize = () => {
        const w = window.innerWidth;
        if (w < 640) setSize({ width: 300, height: 160 });
        else if (w < 768) setSize({ width: 360, height: 192 });
        else if (w < 1024) setSize({ width: 450, height: 240 });
        else setSize({ width: 750, height: 400 });
      };
      updateSize();
      window.addEventListener("resize", updateSize);
      return () => window.removeEventListener("resize", updateSize);
    }, []);

    return size;
  };

  const { width, height } = useResponsiveLogoSize();

  const containerRef = useRef();
  const headingRef = useRef();
  const logoRef = useRef();
  const subheadingRef = useRef();
  const mouse = useRef({ x: 0, y: 0, px: 0, py: 0, isDown: false });

  useGSAP(() => {
    const split = new SplitText(headingRef.current, { type: "chars, words" });

    const tl = gsap.timeline();

    tl.from(split.chars, {
      y: 100,
      opacity: 0,
      stagger: 0.04,
      ease: "back.out(1.7)",
      duration: 1.2,
    })
      .from(
        logoRef.current,
        {
          scale: 0.5,
          opacity: 0,
          ease: "power2.out",
          duration: 1,
        },
        "-=0.6"
      )
      .from(
        subheadingRef.current,
        {
          y: 50,
          opacity: 0,
          ease: "power2.out",
          duration: 1,
        },
        "-=0.5"
      );

    return () => {
      gsap.to([headingRef.current, logoRef.current, subheadingRef.current], {
        opacity: 0,
        y: -50,
        duration: 0.6,
        ease: "power2.inOut",
      });
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const geometry = new THREE.PlaneGeometry(2, 2);

    const rt1 = new THREE.WebGLRenderTarget(width, height);
    const rt2 = new THREE.WebGLRenderTarget(width, height);
    let currentRT = rt1;
    let nextRT = rt2;

    const fluidUniforms = {
      iTime: { value: 0 },
      iResolution: { value: new THREE.Vector2(width, height) },
      iMouse: { value: new THREE.Vector4() },
      iFrame: { value: 0 },
      iPreviousFrame: { value: null },
      uBrushSize: { value: 4.0 },
      uBrushStrength: { value: 1.0 },
      uFluidDecay: { value: 0.98 },
      uTrailLength: { value: 0.95 },
      uStopDecay: { value: 0.92 },
    };

    const displayUniforms = {
      iTime: fluidUniforms.iTime,
      iResolution: fluidUniforms.iResolution,
      iFluid: { value: null },
      uDistortionAmount: { value: 0.6 },
      uColor1: { value: new THREE.Color("#b93cbb") },
      uColor2: { value: new THREE.Color("#4a4547") },
      uColor3: { value: new THREE.Color("#0a0a09") },
      uColor4: { value: new THREE.Color("#464863") },
      uColorIntensity: { value: 1.5 },
      uSoftness: { value: 0.5 },
    };

    const fluidMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader: fluidShader,
      uniforms: fluidUniforms,
    });

    const displayMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader: displayShader,
      uniforms: displayUniforms,
    });

    const fluidMesh = new THREE.Mesh(geometry, fluidMaterial);
    const displayMesh = new THREE.Mesh(geometry, displayMaterial);

    const fluidScene = new THREE.Scene();
    fluidScene.add(fluidMesh);
    scene.add(displayMesh);

    const handleMouseMove = (e) => {
      const rect = renderer.domElement.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - (e.clientY - rect.top) / rect.height;

      mouse.current.px = mouse.current.x;
      mouse.current.py = mouse.current.y;
      mouse.current.x = x;
      mouse.current.y = y;
      mouse.current.isDown = true;
    };

    const handleMouseUp = () => {
      mouse.current.isDown = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    const clock = new THREE.Clock();

    const render = () => {
      requestAnimationFrame(render);

      const t = clock.getElapsedTime();
      fluidUniforms.iTime.value = t;
      fluidUniforms.iFrame.value++;
      fluidUniforms.iPreviousFrame.value = currentRT.texture;

      const m = mouse.current;
      fluidUniforms.iMouse.value.set(
        m.x * width,
        m.y * height,
        m.px * width,
        m.py * height
      );

      renderer.setRenderTarget(nextRT);
      renderer.render(fluidScene, camera);
      renderer.setRenderTarget(null);

      displayUniforms.iFluid.value = nextRT.texture;
      renderer.render(scene, camera);

      [currentRT, nextRT] = [nextRT, currentRT];

      if (!m.isDown) {
        m.px = m.x;
        m.py = m.y;
      }
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      container.removeChild(renderer.domElement);
      renderer.dispose();
      rt1.dispose();
      rt2.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 pointer-events-none text-center space-y-6 gap-20">
        <h1
          ref={headingRef}
          className="text-3xl sm:text-6xl md:text-9xl font-semibold drop-shadow-lg"
        >
          NEVER <span className="text-[#ff0099]">STOP</span> BELIEVING!
        </h1>

        <img
          ref={logoRef}
          src="/homeimgs/Logo.png"
          alt="Logo"
          style={{ width: `${width}px`, height: `${height}px` }}
          className="object-contain opacity-90"
        />
      </div>
    </div>
  );
};

export default FluidCanvas;
