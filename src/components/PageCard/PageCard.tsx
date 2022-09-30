import React from 'react';
import './style.scss';
import { animated, useSpring } from 'react-spring';
import Title from '../Title';
import Button from '../Button';

const calc = (x: number, y: number) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20, 1.1];

// const trans = (x: any, y: any, s: any) =>
// `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

interface PageCardProps {
  backgroundColor?: string;
  title: string;
  subtitle?: string;
  src: string;
  linkLabel?: string;
  linkTo?: string;
}

const PageCard = ({
  backgroundColor = 'var(--color-white)',
  title,
  subtitle,
  src,
  linkLabel = 'Link',
  linkTo = '/',
}: PageCardProps) => {
  // eslint-disable-next-line
  const [_, set] = useSpring(() => (
    { xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }
  ));

  return (
    <div className='page-card' style={{ backgroundColor }}>
      <Title type='h3' text={title} />
      {subtitle && (
        <Title type='h4' text={subtitle} />
      )}
      <animated.img
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        // style={{ transform: animProps.xys.interpolate(trans) }}
        className='page-card__img'
        src={src}
        alt='page-image'
      />
      { linkLabel && <Button label={linkLabel} type='link' to={linkTo} /> }
    </div>
  );
};

export default PageCard;
