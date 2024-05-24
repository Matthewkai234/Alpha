import React from 'react';
import './Breadcrumb.css'; 

const Breadcrumb = () => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="/">Home</a></li>
        <li className="breadcrumb-item"><a href="/user">User</a></li>
        <li className="breadcrumb-item active" aria-current="page">User Profile</li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;