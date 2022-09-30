import React, { useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import PropTypes from 'prop-types';
import './style.scss';

export function Input({ type }) {
  const [focus, setFocus] = useState(false);
  const text = useRef('');

  const animPlaceholder = useSpring({
    top: focus || text.current.length > 0 ? '-2%' : '50%',
    fontSize: focus || text.current.length > 0 ? '0.8rem' : '1rem',
  });

  const toggleFocus = (e) => {
    if (e.type === 'blur') return setFocus(false);

    return setFocus(true);
  };

  const inputHandler = (e) => {
    text.current = e.target.value;
  };

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className='label'>
      <animated.span className='placeholder' style={animPlaceholder}>SEND AN EMAIL</animated.span>
      <input onInput={inputHandler} className='input' onFocus={toggleFocus} onBlur={toggleFocus} type={type} />
    </label>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
};
