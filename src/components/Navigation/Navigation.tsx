import './style.scss';
import { Link } from 'react-router-dom';

type NavigationListElement = {
  label: string;
  link: string;
  id: number;
}

interface NavigationProps {
  list: NavigationListElement[];
}

const Navigation = ({ list }: NavigationProps) => (
  <nav className='navigation'>
    <ul className='navigation__list'>
      { list.map(({ link, label, id }) => (
        <li className='navigation__link' key={id}>
          <Link className='link' to={link}>{ label }</Link>
        </li>
      )) }
    </ul>
  </nav>
);

export default Navigation;
