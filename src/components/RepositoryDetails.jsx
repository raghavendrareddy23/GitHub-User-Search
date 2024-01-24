import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Loader from './Loader';

const RepositoryDetails = () => {
  const [repo, setRepo] = useState(null);
  const [loading, setLoading] = useState(true);  // New state for loading
  const { username, repoName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRepoDetails = async () => {
      try {
        const repoResponse = await axios.get(
          `https://api.github.com/repos/${username}/${repoName}`
        );
        setRepo(repoResponse.data);
      } catch (error) {
        console.error('Error fetching repository details:', error.message);
        // Optionally, you can navigate the user back to the main page or handle it as per your requirement
        navigate('/');
      } finally {
        // Set loading to false after the data is fetched
        setLoading(false);
      }
    };

    // Simulate a delay of 2 seconds (2000 milliseconds)
    const timer = setTimeout(() => {
      fetchRepoDetails();
    }, 2000);

    // Cleanup the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, [username, repoName, navigate]);

  return (
    <div className="container mx-auto mt-8 max-w-md">
      {loading ? (
        <Loader />
      ) : repo ? (
        <div>
          <Link to={`/${username}`}>
            <button className="mb-4 bg-blue-500 text-white px-4 py-2 rounded">
              Back to Repository List
            </button>
          </Link>

          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold">{repo.name}</h2>
            <p className="text-gray-600">{repo.description || 'No description available.'}</p>
            <p className="mt-2">
              <strong>Language:</strong> {repo.language || 'Not specified'}
            </p>
            <p className="mt-2">
              <strong>Stars:</strong> {repo.stargazers_count} |{' '}
              <strong>Forks:</strong> {repo.forks}
            </p>
            {/* Add any other details you want to display */}
            <div className=" py-4">
              <a
                href={repo.html_url}
                className="bg-blue-500 hover:bg-blue-700 text-white text-center font-bold py-2 px-4 rounded"
              >
                View Details
              </a>
            </div>
          </div>
        </div>
      ) : (
        <p>Data not available.</p>
      )}
    </div>
  );
};

export default RepositoryDetails;
