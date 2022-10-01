import React from 'react';
import cn from 'classnames';
import './style.scss';

interface GroupProps {
  children: React.ReactNode;
  oriented: 'vertical' | 'horizontal';
  className: string | null;
}

const Group = ({ children, oriented, className = null }: GroupProps) => (
  <div className={cn('group', className)} data-oriented={oriented}>
    { children }
  </div>
);

export default Group;
