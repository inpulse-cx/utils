"use client";

import { useRef } from "react";

function usePrevious<TValue extends unknown>(value: TValue) {
  const ref = useRef<{ value: TValue; prev: TValue | null }>({
    value: value,
    prev: null,
  });

  const current = ref.current.value;

  if (value !== current) {
    ref.current = {
      value: value,
      prev: current,
    };
  }

  return ref.current.prev;
}

export { usePrevious };
