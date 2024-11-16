import React, { useState } from 'react';

const EmailValidationForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Basic Email Validation Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!error && email) {
      alert(`Email submitted: ${email}`);
    } else {
      alert('Please fix the errors before submitting.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Email Validation Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className={`form-control ${error ? 'is-invalid' : ''}`}
            value={email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {error && <div className="invalid-feedback">{error}</div>}
        </div>
        <button type="submit" className="btn btn-primary" disabled={!!error || !email}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default EmailValidationForm;
