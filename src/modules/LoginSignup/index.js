import './LoginSignup.css';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';

const LoginSignup = ({formType}) => {
  const [ details, setDetails ] = useState({
    email: '', 
    password: '',
  });
  return (
    <div className='login-signup'>
        <div className={formType === 'login' ? 'login-image' : 'signup-image'}/>
        <div className='login-signup-form'>
            <div className='form-title'>{formType}</div>
            <TextField label="Email" variant="outlined" onChange={(e) => setDetails({ ...details, email: e.target.value })}/>
            <TextField label="Password" variant="outlined" onChange={(e) => setDetails({ ...details, password: e.target.value })} type='password' />
            <div className='buttons'>
              <Button variant='outlined'>{formType} as user</Button>
              <Button variant='outlined'>{formType} as admin</Button>
            </div>
        </div>
    </div>
  );
};

export default LoginSignup;
