import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import NavBar from '../components/NavBar';
import Chat from '../components/Chat';
import ShopList from '../components/ShopList';

//ToDo:
// colocar tudo de apenas um array. childrem e etc

const NavBarlinks = [
  {
    path: '/',
    name: 'Lista de Compras',
    element: <ShopList />,
  },
  {
    path: '/chat',
    element: <Chat />,
    name: 'Colors',
  },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavBar name="demo TOP🔝" links={NavBarlinks} />,
    children: NavBarlinks,
  },
]);

export default function Demo() {
  return <RouterProvider router={router} />;
}
