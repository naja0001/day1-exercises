import React from 'react';

type ProfileProps = {
  name: string;         
  email: string;        
  isActive: boolean;   
  singleLine?: boolean; 
};

// Named export
export const Profile: React.FC<ProfileProps> = ({ name, email, isActive, singleLine }) => {
  return (
    <div className={`profile ${singleLine ? 'single-line' : ''}`}>
      <div className="profile-info">
        <h2 className="profile-name">{name}</h2>
        <p className="profile-email">{email}</p>
        <p className="profile-status">{isActive ? 'Active' : 'Inactive'}</p>
      </div>
    </div>
  );
};
