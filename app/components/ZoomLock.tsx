"use client";

import { useEffect, useRef } from "react";

export default function ZoomLock() {
  const baseDpr = useRef<number>(1);

  useEffect(() => {
    baseDpr.current = window.devicePixelRatio;

    const blockZoomKeys = (e: KeyboardEvent) => {
      if (
        (e.metaKey || e.ctrlKey) &&
        (e.key === "+" || e.key === "=" || e.key === "-" || e.key === "0")
      ) {
        e.preventDefault();
      }
    };

    const blockZoomWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
      }
    };

    const counterZoom = () => {
      const scale = window.devicePixelRatio / baseDpr.current;
      if (Math.abs(scale - 1) > 0.01) {
        document.documentElement.style.zoom = `${1 / scale}`;
      } else {
        document.documentElement.style.zoom = "";
      }
    };

    let mq = window.matchMedia(
      `(resolution: ${window.devicePixelRatio}dppx)`
    );

    const onDprChange = () => {
      counterZoom();
      mq.removeEventListener("change", onDprChange);
      mq = window.matchMedia(
        `(resolution: ${window.devicePixelRatio}dppx)`
      );
      mq.addEventListener("change", onDprChange);
    };

    document.addEventListener("keydown", blockZoomKeys);
    document.addEventListener("wheel", blockZoomWheel, { passive: false });
    mq.addEventListener("change", onDprChange);

    return () => {
      document.removeEventListener("keydown", blockZoomKeys);
      document.removeEventListener("wheel", blockZoomWheel);
      mq.removeEventListener("change", onDprChange);
      document.documentElement.style.zoom = "";
    };
  }, []);

  return null;
}
