import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Link } from 'react-router-dom';
import ReactLogo from './horizontal_negro.svg';

export function Logo({ color }) {
  return (
    <Link className='logo' to='/'>
      <div className='logo__png'>
        <img src={ReactLogo} alt="React Logo" height='120px' width='240px'/>
      </div>
    </Link>
  );
}

Logo.propTypes = {
  color: PropTypes.string,
};

Logo.defaultProps = {
  color: '#ffffff',
};
