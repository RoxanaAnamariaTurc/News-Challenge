import './NewsPage.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewsArticle from './NewsArticle';

import NewsPage from './NewsPage';


function App()
{
  return (
    <div className="App">


      <Router>
        <Routes>
          <Route path="/" element={<NewsPage />} />
          <Route path="/article" element={<NewsArticle />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
