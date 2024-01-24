// FollowerCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const FollowerCard = ({ follower }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img src={follower.avatar_url} alt={follower.login} className="w-full" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{follower.login}</div>
      <p className="text-gray-700 text-base">
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </p>
    </div>
    <div className="px-6 py-4">
      <Link to={`/${follower.login}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Go Back
      </Link>
    </div>
  </div>
);

export default FollowerCard;
