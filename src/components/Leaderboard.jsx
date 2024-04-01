import React, { useEffect, useState } from 'react';
import API_URL from '../assets/baseapi';
import { RingLoader } from 'react-spinners';

const LeaderboardPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const URI = `${API_URL}/users`;
      const response = await fetch(URI);
      const userData = await response.json();

      setUsers(userData);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <main>
      {loading ? (
        <>
          <RingLoader color='rgb(205, 0, 0)' size={100} />
          <h1>LOADING</h1>
        </>
      ) : (
        <div className='leaderboard-container'>
          <h1>Leaderboard</h1>
          <table className='score-container'>
            <thead>
              <tr>
                <th>Place</th>
                <th>Username</th>
                <th>Time</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.nickname}</td>
                  <td>{user.duration.toFixed(2)}</td>
                  <td>{user.localDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
};

export default LeaderboardPage;
