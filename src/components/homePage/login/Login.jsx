import React from 'react';
import LoginForm2 from './LoginForm2';


const Login = ({ toggleLogin }) => {
 

  return (
    <div>
      <div className='fixed top-0 bg-opacity-30 backdrop-blur-sm w-full h-full flex  justify-center items-center'>
        <div>
         
          <LoginForm2 toggleLogin={toggleLogin} />
        </div>
      </div>
    </div>
  );
};

export default Login;
