import React from 'react';

function App() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      fontFamily: 'Arial',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1>PayPermit</h1>
        <p>Your Telegram Subscription Payment Platform</p>
        <p style={{ fontSize: '12px', marginTop: '20px' }}>Deployed successfully! 🎉</p>
      </div>
    </div>
  );
}

export default App;