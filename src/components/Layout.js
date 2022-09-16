import NavBar from './NavBar';
import Carousel from 'nuka-carousel'

export default function Layout ({children}) {
  return (
  <div>
  <NavBar />
  <div>{children}</div>
  </div>
  );
}