import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import ProductList from './components/ProductList';
import Root from './components/Root';
import ProductInfo from './components/ProductInfo';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>Page Not Found</div>,
    children: [
      {index: true, element: <Home />},
      {path: "/product", element: <ProductList />},
      {path: "/product/:productId", element: <ProductInfo />}
    ]
  }
])

function App() {
  return (
    <div>
      <h1 className='title'>Shopping Mall</h1>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
