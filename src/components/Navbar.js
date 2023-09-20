import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './nav.css';


const Navbar = () => {
  const [profileImage, setProfileImage] = useState('');

  useEffect(() => {
    // Make a request to the "Lorem Picsum" API to get the profile image URL
    fetch('https://picsum.photos/id/999/info')
      .then((response) => response.json())
      .then((data) => {
        // Assuming your API response contains the image URL in a 'profileImageUrl' field
        // Construct the image URL with width and height
        const imageUrl = `https://picsum.photos/id/999/${data.width}/${data.height}`;

        // Set the image URL in the state
        setProfileImage(imageUrl);
      })
      .catch((error) => {
        console.error('Error fetching profile image:', error);
      });
  }, []);

  return (
    <div className="navbar-container">
      <div className="navbar">
        <h4>TaskBoard</h4>
        <div className="contents">
          <Link to="/list" className="nav-link">ToDo List</Link>
          <Link to="/weather" className="nav-link">Weather</Link>
          <Link to="/cal" className="nav-link">Calculator</Link>
        </div>
        <div className="profile-icon">
          <img src={profileImage} alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
