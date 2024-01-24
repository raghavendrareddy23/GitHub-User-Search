// GitHubUserSearch.js
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../api";
import Loader from "./Loader";

const GitHubUserSearch = () => {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState(null);
  const [loading, setLoading] = useState(true);

  // Extracting username from the URL params
  const { username } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await api.get(`/users/${username}`);
        const reposResponse = await api.get(`/users/${username}/repos`);
        setTimeout(() => {
          setUserData(userResponse.data);
          setRepos(reposResponse.data);
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [username]);
  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto mt-8 p-4">
      <div className="py-4">
        <Link to={`/`}>
          <button className="mb-4 bg-blue-500 text-center text-white px-4 py-2 rounded hover:bg-blue-700">
            Back to Home
          </button>
        </Link>
      </div>

      {loading ? (
        <Loader loading={true} />
      ) : (
        <>
          {userData && (
            <div className="bg-gray-200 p-4 text-center rounded shadow-md">
              <div className="flex justify-center">
                <img
                  src={userData.avatar_url}
                  alt={userData.login}
                  className="w-44 rounded-xl"
                />
              </div>

              <h2 className="text-2xl font-bold mb-2">{userData.name}</h2>
              <p className="text-gray-600 text-sm">{userData.bio}</p>
              <div className="flex items-center justify-center mt-2 text-gray-700 text-sm">
                <div className="mr-4">
                  <strong>Followers:</strong> {userData.followers}
                </div>
                <div className="mr-4">
                  <strong>Following:</strong> {userData.following}
                </div>
                <div>
                  <strong>Public Repositories:</strong> {userData.public_repos}
                </div>
              </div>
              <p className="mt-2 text-gray-700 text-sm">
                <strong>Location:</strong> {userData.location}
              </p>
              <Link to={`/${username}/followers`}>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-22">
                  View Followers
                </button>
              </Link>
            </div>
          )}

          {repos && (
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {repos.map((repo) => (
                <Link
                  key={repo.id}
                  to={`/${username}/${repo.name}`}
                  className="text-decoration-none"
                >
                  <div className="bg-white p-4 rounded shadow-md cursor-pointer hover:shadow-lg">
                    <h3 className="text-lg font-bold mb-2">{repo.name}</h3>
                    <p className="text-gray-600 text-sm">{repo.description}</p>
                    <div className="flex items-center mt-2 text-gray-700 text-sm">
                      <div className="mr-4">
                        <strong>Language:</strong> {repo.language}
                      </div>
                      <div className="mr-4">
                        <strong>Stars:</strong> {repo.stargazers_count}
                      </div>
                      <div>
                        <strong>Forks:</strong> {repo.forks}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default GitHubUserSearch;
