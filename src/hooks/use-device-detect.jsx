import React, { useState } from 'react';

export default function useDeviceDetect(ssrAgent) {
  const [isMobile, setMobile] = useState(false);
  const [isAndroid, setAndroid] = useState(false);
  const [isIos, setIos] = useState(false);

  React.useEffect(() => {
    let userAgent = '';
    if (ssrAgent) {
      userAgent = ssrAgent;
    } else if (typeof navigator !== 'undefined') {
      userAgent = navigator.userAgent;
    }
    setMobile(
      Boolean(
        userAgent.match(
          /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
        )
      )
    );
    setAndroid(Boolean(userAgent.match(/Android/i)));
    setIos(Boolean(userAgent.match(/iPhone|iPad|iPod/i)));
  }, []);

  return {
    isMobile,
    isAndroid,
    isIos,
  };
}
