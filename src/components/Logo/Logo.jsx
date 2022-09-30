import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Link } from 'react-router-dom';

export function Logo({ src, height, width }) {
  return (
    <Link className='logo' to='/'>
      <div className='logo__png'>
        <img src={src} alt='React Logo' height={height} width={width} />
      </div>
    </Link>
  );
}

Logo.propTypes = {
  src: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

Logo.defaultProps = {
  src: '',
  height: '120px',
  width: '240px',
};
