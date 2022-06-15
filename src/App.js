/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import CollectionList from './pages/Collection/CollectionList';
import CollectionDetail from './pages/Collection/CollectionDetail'; 
import AnimeDetail from './pages/AnimeDetail/AnimeDetail';
import CollectionContextProvider from './hooks/context/CollectionContext';

function App() {
  return (
    <div className="App" css={css`
      background-color: #3d619b;
    `}>
      <CollectionContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/Collection' exact element={<CollectionList />} />
            <Route path='/anime/:id' exact element={<AnimeDetail />} />
            <Route path='/Collection/:id' exact element={<CollectionDetail />} />
          </Routes>
        </Router>
      </CollectionContextProvider>
    </div>
  );
}

export default App;
