import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import MobileRoot from './page/MobileRoot';
import MobileHome from './page/MobileHome';


export default function App() {

  let router = createBrowserRouter([{
    path:'/',
    element:<MobileRoot/>,
    children:[{
      index:true,
      element:<MobileHome/>
    }]
  }])

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}
