import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import './SpecialMenu.css';
import { data, images } from '../../constants';

const SpecialMenu = () => (
  <div className='app__specialMenu section__padding flex__center'>
    <div className='app__specialMenu-title'>
      <SubHeading title={'Menu That Fits Your Palate'} />
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>

    <div className='app__specialMenu-menu flex__center'>

      <div className='app__specialMenu-menu_wine flex__center'>
        <p className='app__specialMenu-menu_heading p__cormorant'>Wine & Beer</p>
        <div className='app__specialMenu-menu_items'>
          {data.wines.map((wine, index) => (
            <MenuItem key={index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>

      <div className='app__specialMenu-menu_img'>
        <img src={images.menu} alt="menu" />
      </div>


      <div className='app__specialMenu-menu_cocktails flex__center'>
        <p className='app__specialMenu-menu_heading p__cormorant'>Cocktails</p>
        <div className='app__specialMenu-menu_items'>
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>

    </div>


  </div>
);

export default SpecialMenu;
