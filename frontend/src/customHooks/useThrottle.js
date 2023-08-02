import { useRef } from "react";
import { useEffect } from "react";

const useThrottle = (callback, delay) => {
  const throttleId = useRef(false);
  useEffect(() => {
    if (!throttleId.current) {
      throttleId.current = true;
      setTimeout(() => {
        callback();
        throttleId.current = false;
      }, delay);
    }
  }, [callback, delay]);
};

export { useThrottle };
