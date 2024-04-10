import React from 'react';
import './customCursor.css'; // Import the CSS file

const CustomCursor = () => {
  // Get cursor position
  const [cursorPos, setCursorPos] = React.useState({ x: 0, y: 0 });

  // Update cursor position on mouse move
  const updateCursorPos = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  // Attach mouse move event listener
  React.useEffect(() => {
    window.addEventListener('mousemove', updateCursorPos);
    return () => {
      window.removeEventListener('mousemove', updateCursorPos);
    };
  }, []);

  return (
    <div className="custom-cursor" style={{ left: cursorPos.x, top: cursorPos.y }}>
      URBANRAYS
    </div>
  );
};

export default CustomCursor;
