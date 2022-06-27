import Home from '../component/Home';
import Login from '../component/Login'
import Register from '../component/Register'

const routes = [
  {
    path: '/',
    element: Home,
  },
  {
    path: '/login',
    element: Login,
  },
  {
    path: '/register',
    element: Register,
  },
];

export default routes;
