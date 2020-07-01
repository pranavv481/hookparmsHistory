import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();
  console.log(history);
  return (
    <div>
      <h1>Home</h1>
      <button
        className="btn waves-effect waves-light"
        onClick={() => history.push('/about')}
      >
        Navigate To About
      </button>
    </div>
  );
};

export default Home;
