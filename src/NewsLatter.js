import React, { useState } from 'react';

const NewsLatter = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState('');
  const [showError, setShowError] = useState(false);
  const [isClicked, setIsClicked] = useState(false); 

  const handleSubscribe = () => {
    if (!email) {
      setShowError(true); 
      return;
    }

    setIsClicked(true); 
    setIsSubscribed(true);
    setShowError(false);

    setTimeout(() => {
      setIsClicked(false);
      setIsSubscribed(false);
      setEmail(''); 
    }, 3000);
  };

  return (
    <div
      style={{
        background: 'black',
        height: '150px',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        padding: '20px',
        textAlign: 'center',
        marginTop:'40px'
      }}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '20px',
        marginBottom: '20px'
      }}>
        <h1 
          className='heading1' 
          style={{
            fontFamily: 'Georgia, serif', 
            fontSize: '48px', 
            fontWeight: 'bold', 
            letterSpacing: '2px',
            marginRight:'150px',
            marginTop:'px'
          }}
        >
        <span style={{ color: '#f8133c', fontSize: '55px', }}> Subscribe</span> to <br />Our Newsletter 
        </h1>

        <input 
          type="email" 
          name="email" 
          placeholder="Please Enter your email" 
          style={{
            height: '70px', 
            width: '480px',
            padding: '5px', 
            borderRadius:'10px',
            // marginTop:'-30px'
            // backgroundColor: '#f8133c'
          }} 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
      </div>
{/* 
      <button 
        className="button" 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleSubscribe}
        style={{
          height: '50px',
          width: '130px',
          borderRadius: '8px', 
          borderColor: isClicked ? 'transparent' : isHovered ? 'black' : 'transparent', 
          borderStyle: 'solid',
          color: 'white',
          backgroundColor: '#f8133c',
          cursor: 'pointer',
          fontFamily: 'Courier New, monospace', 
          fontWeight: 'bold',
          marginTop:'-90px',
          marginLeft:'370px'
        }}
      >
        Subscribe
      </button> */}

      {showError && (
        <div style={{
          marginTop: '30px', 
          color: 'white', 
          fontFamily: 'Arial, sans-serif', 
          fontSize: '1.2em',
          marginLeft:'530px'
        }}>
          Please fill in your email to subscribe.
        </div>
      )}

      {isSubscribed && (
        <div style={{
          marginTop: '30px', 
          color: 'white', 
          fontFamily: 'Arial, sans-serif', 
          fontSize: '1.2em',
          marginLeft:'450px'
        }}>
          Successfully subscribed! 
        </div>
      )}
    </div>
  );
};

export default NewsLatter;
