import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserProfile({ username }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`/api/users/${username}`)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error("Error fetching user:", error);
      });
  }, [username]);

  if (!user) return <p>Loading user information...</p>;

  return (
    <div>
      <h2>{user.username}'s Profile</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserProfile;
