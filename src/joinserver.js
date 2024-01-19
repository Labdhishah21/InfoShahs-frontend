// JoinServer.js
import React from "react";
import './joinserver.css';

const JoinServer = () => {
  return (
    <div className="join-server-container">
      <div className="input-container">
        <div>To join the game</div>
        <input
          type="number"
          placeholder="Enter Code"
          className="input input-bordered input-primary w-full max-w-xs"
        />
      </div>
    </div>
  );
}

export default JoinServer;

