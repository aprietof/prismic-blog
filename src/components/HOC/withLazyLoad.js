import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function withLazyLoad(Component /* : React.ComponentType */, options /* :Object */ = {}) {
  return function WithLazyLoad(props /* :Object */) {
    const [ref, inView] = useInView({ triggerOnce: true, ...options });
    const [load, setLoad] = useState(false);

    useEffect(
      () => {
        if (!load && inView) setLoad(true);
      },
      [inView, load]
    );

    return <div ref={ref}>{load && <Component {...props} />}</div>;
  };
}
