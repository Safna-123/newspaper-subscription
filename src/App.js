import logo from './logo.svg';
import './App.css';
import AddSubscribersPage from './components/AddSubscribersPage';
import ViewSubscribersPage from './components/ViewSubscribersPage';
import SearchSubscribersPage from './components/SearchSubscribersPage';
import DeleteSubscribersPage from './components/DeleteSubscribersPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (   
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<AddSubscribersPage/>}/>
      <Route path="/view" element={<ViewSubscribersPage/>}/>
      <Route path="/search" element={<SearchSubscribersPage/>}/>
      <Route path="/delete" element={<DeleteSubscribersPage/>}/>
     </Routes>
     </BrowserRouter>
  );
}

export default App;
