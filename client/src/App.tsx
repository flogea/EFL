import './App.css';
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import { ContructorPage, HomePage, SignIn as SignInPage, SignUp as SignUpPage, TestPage } from './pages';
import { router } from './router';

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
