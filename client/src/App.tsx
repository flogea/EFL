import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ContructorPage, HomePage, SignInPage, SignUpPage, TestPage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/constructor" element={<ContructorPage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
