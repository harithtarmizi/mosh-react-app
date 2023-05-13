import { useEffect, useRef } from "react";

// component must be pure
const LearnHookEffect = () => {
  const ref = useRef<HTMLInputElement>(null);

  // afterRender
  useEffect(() => {
    // Side effect, changing somehting outside of the component
    if (ref.current) {
      return ref.current.focus();
    }
  });

  useEffect(() => {
    document.title = "My App";
  });

  return <input ref={ref} type="text" className="form-control" />;
};

export default LearnHookEffect;
