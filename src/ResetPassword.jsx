import React, { useState } from 'react';

function ResetPassword({ token }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords don't match!");
      return;
    }

    try {
      const response = await fetch('/api/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, password }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('Password reset successfully!');
      } else {
        setMessage(result.error || 'Failed to reset password');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (

    
    <center className="center" style={{height:'380px', width:'450px', borderRadius:'30px' , marginTop:'50px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', marginLeft:'450px'}}>
        <h1 calssName="heading" style={{marginTop:'100px'}}>Reset Password</h1>
    <form onSubmit={handleResetPassword} className="register3" style={{height:'250px', width:'450px', borderRadius:'30px' , marginTop:'20px',  }}>
      <div className="register1" style={{width:'750px', height:'30px', marginTop:'40px', marginLeft:'-152px'}} >
        <label>New Password:</label>
        <input
          type="password"
          name="password"
          placeholder='enter your new password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="register2" style={{width:'750px', height:'30px',marginLeft:'-160px', marginTop:'30px'}}>
        <label>Confirm Password:</label>
        <input
          type="password"
          name="password"
          placeholder='conform password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit"  className='btn btn-primary' style={{marginTop:'40px', borderRadius:'5px',}}>Submit</button>
      {message && <p>{message}</p>}
    </form>
    </center>
  );
}

export default ResetPassword;
