import { useRef, useState } from 'react';
import './App.css';
import DraggableElement from './pages/DraggableElement';
import ElementLocation from './pages/ElemenLocation';

function App() {
  const menus = ['Element Location', 'Draggable Element'];
  const [menu, setMenu] = useState(0);

  const handleMenu = (i) => {
    setMenu(i);
  };

  return (
    <div>
      {/* Navigation */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 10,
          marginBottom: 20,
        }}
      >
        {menus.map((item, i) => (
          <button
            key={i}
            onClick={() => handleMenu(i)}
            style={{
              fontSize: 12,
              backgroundColor: 'white',
              border: '1px solid black',
              padding: 4,
              cursor: 'pointer',
            }}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Content */}
      <div>{menu === 0 ? <ElementLocation /> : <DraggableElement />}</div>
    </div>
  );
}

export default App;
