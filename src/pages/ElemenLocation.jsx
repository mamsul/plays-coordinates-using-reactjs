import React, { useState } from 'react';

const ElementLocation = () => {
  const [globalCoor, setGlobalCoor] = useState({ x: 0, y: 0 });
  const [cardCoor, setCardCoor] = useState({ x: 0, y: 0 });

  const handleClick = (e) => {
    setCardCoor({
      x: e.clientX - e.target.offsetLeft,
      y: e.clientY - e.target.offsetTop,
    });
    setGlobalCoor({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const styles = {
    titleBox: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: 10,
      title: {
        fontSize: 11,
      },
    },
    theBox: {
      width: 150,
      height: 80,
      position: 'absolute',
      top: cardCoor?.y,
      left: cardCoor?.x,
      border: '1px dashed black',
      pointerEvents: 'none',
      remove: {
        fontSize: 10,
        height: 23,
        position: 'absolute',
        top: 5,
        right: 5,
      },
    },
  };

  return (
    <div className="page">
      <div style={styles.titleBox}>
        <span style={styles.titleBox.title}>
          card X = {cardCoor?.x} / screen X = {globalCoor?.x}
        </span>
        <span style={styles.titleBox.title}>
          card Y = {cardCoor?.y} / screen Y = {globalCoor?.y}
        </span>
      </div>

      <div className="card" onClick={(e) => handleClick(e)}>
        {cardCoor?.x != 0 && (
          <div style={styles.theBox}>
            <div
              style={{
                width: '100%',
                height: '100%',
                position: 'relative',
              }}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ElementLocation;
