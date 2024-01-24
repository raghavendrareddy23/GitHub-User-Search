import React, { useEffect, useState } from "react";
import api from "../api";
import { Link, useParams } from "react-router-dom";
import Loader from "./Loader";

const FollowerCard = ({ follower, username }) => (
  <div className="max-w-sm rounded overflow-hidden bg-gray-500 shadow-lg">
    <img src={follower.avatar_url} alt={follower.login} className="w-full" />
    <div className="px-6 py-4">
      <div className="font-bold text-center uppercase text-xl mb-2">
        {follower.login}
      </div>
    </div>
    <div className="px-6 py-4 text-center">
      <a
        href={follower.html_url}
        className="bg-blue-500 hover:bg-blue-700 text-white text-center font-bold py-2 px-4 rounded"
      >
        View Details
      </a>
    </div>
  </div>
);

const FollowersList = () => {
  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { username } = useParams();

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const followersResponse = await api.get(`/users/${username}/followers`);
        setFollowers(followersResponse.data);
      } catch (error) {
        console.error("Error fetching followers:", error.message);
      } finally {
        setTimeout(() => {
            setLoading(false);
          }, 3000);
      }
    };

    fetchFollowers();
  }, [username]);

  return (
    <div className="container mx-auto mt-8">
      <div className="py-4">
        <Link to={`/${username}`}>
          <button className="mb-4 bg-blue-500 text-center text-white px-4 py-2 rounded hover:bg-blue-700">
            Back to Repository List
          </button>
        </Link>
      </div>
      <h2 className="text-2xl font-bold mb-4">Followers of {username}</h2>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {followers.map((follower) => (
            <FollowerCard
              key={follower.id}
              follower={follower}
              username={username}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FollowersList;
