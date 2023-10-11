import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import MobileRoot from './page/MobileRoot';
import MobileHome from './page/MobileHome';


export default function App() {
  let deviceWidth = null;
  // let pathName=window.location.pathname;
  // let mobilePath=pathName.slice(19);

  let router = createBrowserRouter([{
    path:'/',
    element:<MobileRoot/>,
    children:[{
      index:true,
      element:<MobileHome/>
    }]
  }])

 

        window.addEventListener('resize',()=>{        
          deviceWidth=window.innerWidth;        
          if(deviceWidth>768){          
          document.location.replace(`http://esanghyun.dothome.co.kr/profile/`)          
          } 

        })  

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}
