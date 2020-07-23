import React from 'react';
import './Button.scss';

export const Button = () => {
  return (
    <button className="load-button">
      load more
    </button>
  );
}

export const SwitchButton = () => {
  return (
    <button className="switch-button">
      <img src="grid_btn.svg" alt="switch_btn" />
    </button>
  );
}