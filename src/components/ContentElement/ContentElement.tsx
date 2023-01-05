import React from 'react';
import './style.scss';
// imports
import { useSpring } from 'react-spring';

interface ContentElementProps {
    backgroundColor?: string;
    header: string;
    section: string;
    src: string;
  }

const ContentElementBlock = (
    {
        backgroundColor,
        header,
        section,
        src,
    } : ContentElementProps) => {
  const titleAnim = useSpring({
    opacity: 1,
    transform: 'translateX(0px)',
    from: { opacity: 0, transform: 'translateX(-40px)' },
  });

  return (
    <section className='content-element'>
        <div className='header'>
            {header}
        </div>
        <div className='content'>
            {section}
        </div>
        <div className='media'>
            <img  src={src} alt={`${header}-element`} />
        </div>
    </section>
  );
};

export default ContentElementBlock;
