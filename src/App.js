import React, { useState } from 'react';

import './App.css';
import Toast from './components/toast/Toast';
import checkIcon from './assets/check.svg';
import errorIcon from './assets/error.svg';
import Button from './components/button/Button';

const BUTTON_PROPS = [
  {
    id: 1,
    type: 'success',
    className: 'success',
    label: 'Success'
  },
  {
    id: 2,
    type: 'danger',
    className: 'danger',
    label: 'Danger'
  }
];

const App = () => {
  const [list, setList] = useState([]);
  const [position] = useState('Select Position');
  let toastProperties = null;

  const showToast = type => {
    const id = Math.floor((Math.random() * 101) + 1);

    switch(type) {
      case 'success':
        toastProperties = {
          id,
          title: 'Success',
          description: 'This is a success toast component',
          backgroundColor: '#5cb85c',
          icon: checkIcon
        }
        break;
      case 'danger':
        toastProperties = {
          id,
          title: 'Danger',
          description: 'This is a error toast component',
          backgroundColor: '#d9534f',
          icon: errorIcon
        }
        break;
        default:
          setList([]);
    }

    setList([...list, toastProperties]);
  }

  return (
    <div className="app">
      <div className="app-header">
        <p>React Simple Toast Message</p>
        <div className="toast-buttons">
          {
            BUTTON_PROPS.map(e =>
              <Button
                key={e.id}
                className={`${position === 'Select Position' ? `${e.className} btn-disable` : `${e.className}`}`}
                label={e.label}
                handleClick={() => showToast(e.type)}
              />
            )
          }
        </div>
      </div>

      <Toast
        toastList={list}
      />
    </div>
  );
}

export default App;
