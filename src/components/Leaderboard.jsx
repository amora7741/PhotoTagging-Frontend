import React, { useEffect, useState } from 'react';
import API_URL from '../assets/baseapi';

const LeaderboardPage = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const URI = `${API_URL}/users`;
      const response = await fetch(URI);
      const userData = await response.json();

      setUsers(userData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <main>
      <div className='leaderboard-container'>
        <h1>Leaderboard</h1>
        <table className='score-container'>
          <thead>
            <tr>
              <th>Place</th>
              <th>Username</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.nickname}</td>
                <td>{user.duration.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default LeaderboardPage;
