import React from 'react';
import './style.scss';
import { Navigation } from '../Navigation/Navigation';

export function PageNavigation() {
  return (
    <Navigation list={[
      { label: 'SOLUTIONS', link: '/', id: 1 },
      { label: 'APPROACH', link: '/', id: 2 },
      { label: 'ABOUT US', link: '/', id: 3 },
      { label: 'CONTACT', link: '/', id: 4 },
    ]}
    />
  );
}
