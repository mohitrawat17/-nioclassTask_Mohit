import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import TestPage from "./components/TestPage";
import FinishPage from "./components/FinishPage";
import Body from './components/Body'

function App() {
 
  const appRouter=createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children:[
        {
          path:'/',
          element:<LandingPage/>
        },
        {
          path:'/test',
          element:<TestPage/>
        },
        {
          path:'/finish',
          element:<FinishPage/>
        }
      ]
    },
    
  ])


  return (
    <RouterProvider router={appRouter}/>
  );
}

export default App;
