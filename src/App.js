import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './component/router/router';
import PrivetRout from './component/PrivetRout/PrivetRout';


function App() {
  return (
    <div className='App'>
     
        <RouterProvider router={router} />
        
      
    </div>
  );
}

export default App;
