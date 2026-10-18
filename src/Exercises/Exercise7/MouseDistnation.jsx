import { useEffect, useState } from "react";

const MouseDistnation = () => {
  const [mouse, setMouse] = useState({
    X: 0,
    Y: 0,
  });
  useEffect(() => {
    const handleMove = (e) =>
      setMouse({
        X: e.clientX,
        Y: e.clientY,
      });
    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);
  return (
    <div>
      <h3>Mouse X: {mouse.X}</h3>
      <h3>Mouse Y: {mouse.Y}</h3>
    </div>
  );
};

export default MouseDistnation;
