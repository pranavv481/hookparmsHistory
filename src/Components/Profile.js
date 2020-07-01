import React from 'react';
import { useParams, useLocation, useRouteMatch } from 'react-router-dom';

const Profile = () => {
  const { name } = useParams();
  const location = useLocation();
  console.log(location);
  const match = useRouteMatch();
  console.log(match);

  return (
    <div>
      <h1>your requested profile of {name}</h1>
    </div>
  );
};

export default Profile;
