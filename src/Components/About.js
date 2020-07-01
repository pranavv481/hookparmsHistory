import React from 'react';
import { useHistory } from 'react-router-dom';
const About = () => {
  const history = useHistory();
  return (
    <div>
      <h1>About</h1>
      <button
        className="btn waves-effect waves-light"
        onClick={() => history.goBack()}
      >
        Go Back
      </button>
    </div>
  );
};

export default About;
