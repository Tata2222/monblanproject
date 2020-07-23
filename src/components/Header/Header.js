import React from 'react';
import Datepicker from '../DatePicker/DatePicker';
import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__info">
          <p className="header__title">monblanproject</p>
          <p className="header__badge">start on 17-09-2021</p>
        </div>
        <div className="header__info">
          <p className="header__info-item"><span>870</span>posts</p>
          <p className="header__info-item"><span>11,787</span>followers</p>
          <p className="header__info-item"><span>112</span>following</p>
        </div>
        <div className="header__datepicker">
          <p className="header__datepicker-title">Date</p>
          <Datepicker />
        </div>
      </div>
    </header>
  );
}
