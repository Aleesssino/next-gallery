"use client"; // This directive ensures the component is rendered on the client side.

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import ZoomParallaxGallery from "./zoomParallaxGallery"; // Assuming this is the file where you have the ZoomParallaxGallery component

export default function ZoomParallaxWrapper() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Cleanup Lenis on unmount
    };
  }, []);

  return <ZoomParallaxGallery />;
}
