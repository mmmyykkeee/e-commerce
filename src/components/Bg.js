import React, { useEffect } from "react";

export default function Bg(props) {
  const elementRef = React.useRef(null);

  useEffect(() => {
    elementRef.current.style.backgroundImage = `url(${props.dataSetbg})`;
  }, [props.dataSetbg]);

  return <div ref={elementRef} />;
}
