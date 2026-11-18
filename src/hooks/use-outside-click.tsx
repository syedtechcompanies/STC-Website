"use client";

import { useEffect, type RefObject } from "react";

export function useOutsideClick<T extends HTMLElement>(
  ref: RefObject<T>,
  callback: (event: PointerEvent) => void,
  enabled = true,
) {
  useEffect(() => {
    if (!enabled) return;

    function handlePointerDown(event: PointerEvent) {
      const target = event.target;
      if (target instanceof Node && ref.current && !ref.current.contains(target)) {
        callback(event);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [callback, enabled, ref]);
}
