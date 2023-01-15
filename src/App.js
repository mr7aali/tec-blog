import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './component/router/router';
import AuthProvider from './component/contexts/AuthProvider';

function App() {
  return (
    <div className='App'>
      <AuthProvider>

        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}

export default App;
