// portfolio1.js
// portfolio1.js
import React from 'react';
import './portfolio1.css'; // Import the custom CSS stylesheet

const Portfolio1 = () => {
  return (
    <div className="card-container">
      <div className="card create-server">
        <div className="card-body items-center text-center">
          <h2 className="card-title"></h2>
          <p></p>
          <div className="card-actions justify-end">
            <button className="btn btn-ghost">Create a server</button>
          </div>
        </div>
      </div>

      <div className="card join-server">
        <div className="card-body items-center text-center">
          <h2 className="card-title"></h2>
          <p></p>
          <div className="card-actions justify-end">
            <button className="btn btn-ghost">Join a server</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio1;