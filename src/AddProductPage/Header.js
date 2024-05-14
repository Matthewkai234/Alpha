import React from 'react';
import './style.css';

export function Header() {
  return (
    <div className='main-container'>
      <div className='group-one'>
        <div className='group'>
          <div className='frame'>
            <div className='skin-clinic'>
              <span className='title'>Lobo </span>
              <span className='title2'> MotorSport</span>
            </div>
          </div>
          <div className='mdi-account-alert'>
            <div className='vector' />
          </div>
          <div className='akar-icons-search'>
            <div className='vector-1' />
          </div>
          <div className='heart-icon'>
            <div className='vector-2' />
          </div>
          <div className='shopping-cart'>
            <div className='vector-3' />
          </div>
        </div>
        <img className="logo" alt="Image" src="https://c.animaapp.com/VABn9zZH/img/image-5@2x.png" />
        <div className='group-two'>
        <div className='home-shop'>
          <span className='home'>Home</span>
          <span className='shop'>Shop</span>
        </div>
        <div className='about-contact'>
          <span className='about'>AboutUs</span>
          <span className='contact'>Contact</span>
        </div>
      </div>
      
      </div>
   
      <div className='rectangle' />

    </div>

  );

}

