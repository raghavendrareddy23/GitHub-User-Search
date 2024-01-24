// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import GitHubUserSearch from './components/GitHubUserSearch';
import RepositoryDetails from './components/RepositoryDetails';
import FollowersList from './components/FollowersList';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/:username" element={<GitHubUserSearch />} />
          <Route path="/:username/:repoName" element={<RepositoryDetails />} />
          <Route path="/:username/followers" element={<FollowersList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;