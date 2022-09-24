import React from 'react';
import './style.scss';

export function Contacts() {
  return (
    <div className='contacts'>
      <a className='outside-link' href='mailto:info@spaik.com'>info@spaik.com</a>
      <a className='outside-link' href='http://twitter.com'>@spaik</a>
    </div>
  );
}
