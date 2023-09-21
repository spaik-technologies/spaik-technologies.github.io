import './style.scss';
import Navigation from '../Navigation';

const PageNavigation = () => (
  <Navigation list={[
    { label: 'Solutions', link: '/', id: 1 },
    { label: 'About us', link: '/', id: 2 },
    { label: 'Blogs & Publications', link: '/', id: 3 },
  ]}
  />
);

export default PageNavigation;
