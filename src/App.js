import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UrlForm from './UrlForm';
import UrlRedirect from './UrlRedirect';

function App() {
    return (
     
        <BrowserRouter>
       
          <Routes>
            <Route path="/" element={<UrlForm />}>  </Route>
            <Route path="/:shortUrl" render={({ match }) => <UrlRedirect shortUrl={match.params.shortUrl} />} />
          </Routes>
       
        </BrowserRouter>
        
      );
}

export default App;