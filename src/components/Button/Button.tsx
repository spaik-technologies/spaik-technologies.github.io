import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const themes = {
  DEFAULT: 'default',
  LINK: 'link',
};

interface ButtonProps {
  type: string;
  label: string | null;
  to: string;
  icon?: any;
  onClick?: () => {};
}

const Button = ({
  type = themes.DEFAULT,
  label = null,
  to = '/',
  icon: ButtonIcon = undefined,
  onClick,
}: ButtonProps) => (
  type === themes.LINK
    ? (
      <Link className='button' to={to} data-theme={type}>
        { label }
        { ButtonIcon && <ButtonIcon className='button__icon' /> }
      </Link>
    )
    : (
      <button onClick={onClick} type='button' className='button' data-theme={type}>
        { label }
        { ButtonIcon && <ButtonIcon className='button__icon' /> }
      </button>
    )
);

export default Button;
