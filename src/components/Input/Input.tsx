import React, { useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import './style.scss';

interface InputProps {
  type: string;
}

const Input = ({ type }: InputProps) => {
  const [focus, setFocus] = useState(false);
  const text = useRef('');

  const animPlaceholder = useSpring({
    top: focus || text.current.length > 0 ? '-2%' : '50%',
    fontSize: focus || text.current.length > 0 ? '0.8rem' : '1rem',
  });

  const toggleFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.type === 'blur') return setFocus(false);

    return setFocus(true);
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    text.current = e.target.value;
  };

  return (
    <label className='label'>
      <animated.span className='placeholder' style={animPlaceholder}>SEND AN EMAIL</animated.span>
      <input onInput={inputHandler} className='input' onFocus={toggleFocus} onBlur={toggleFocus} type={type} />
    </label>
  );
};

export default Input;
