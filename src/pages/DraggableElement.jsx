import React, { useEffect, useRef, useState } from 'react';

const DraggableElement = () => {
  const dragParent = useRef();
  const [isClick, setIsClick] = useState(false);
  const [position, setPosition] = useState({
    x: 50,
    y: 50,
  });
  const [first, setFirst] = useState({
    x: 0,
    y: 0,
  });
  let initX = 50;
  let initY = 50;

  const handleDrag = (e) => {
    e.preventDefault();
    setIsClick(true);
    const elementX = e.target.offsetLeft - dragParent.current.offsetLeft;
    const elementY = e.target.offsetTop - dragParent.current.offsetTop;
    const firstX = e.clientX - dragParent.current.offsetLeft;
    const firstY = e.clientY - dragParent.current.offsetTop;
    setPosition({
      x: elementX,
      y: elementY,
    });
    setFirst({
      x: firstX,
      y: firstY,
    });
    initX = elementX;
    initY = elementY;
    onMouseMove(e);
  };

  const onMouseUp = (e) => {
    setIsClick(false);
  };

  const onMouseMove = (e) => {
    if (isClick === true) {
      dragElement(e);
    }
  };

  function dragElement(e) {
    const clientX = e.clientX - dragParent.current.offsetLeft;
    const clientY = e.clientY - dragParent.current.offsetTop;
    setPosition({
      x: initX + clientX - first.x,
      y: initY + clientY - first.y,
    });
  }

  const styles = {
    element: {
      position: 'relative',
      width: 150,
      height: 100,
      top: position?.y,
      left: position?.x,
      border: '2px dashed black',
      backgroundColor: 'white',
      cursor: 'move',
    },
  };

  return (
    <>
      <span>on progress.</span>
      <div
        ref={dragParent}
        className="draggable-parent"
        onMouseUp={(e) => onMouseUp(e)}
      >
        <div
          style={styles.element}
          onMouseDown={(e) => handleDrag(e)}
          onMouseMove={(e) => onMouseMove(e)}
        ></div>
      </div>
    </>
  );
};

export default DraggableElement;
