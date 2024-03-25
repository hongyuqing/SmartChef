import React from 'react';

function App() {
  return (
    <div className="Potal" style={{ width: 1440, height: 1024, position: 'relative', background: 'white' }}>
      <img className="Ellipse1" style={{ width: 790, height: 790, left: 775, top: 350, position: 'absolute', background: 'linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)', borderRadius: '50%' }} src="https://via.placeholder.com/790x790" alt="ellipse" />
      <div className="Header" style={{ width: 1440, height: 120, paddingTop: 15, paddingBottom: 15, paddingLeft: 53, paddingRight: 1097, left: 0, top: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex' }}>
        <div className="Logo" style={{ width: 290, alignSelf: 'stretch', position: 'relative' }}>
          <div className="Brainboost" style={{ width: 185, height: 50, left: 105, top: 19, position: 'absolute', textAlign: 'center' }}>
            <span style={{ color: '#29B58F', fontSize: 36, fontFamily: 'Pacifico', fontWeight: 400, wordWrap: 'break-word' }}>Brain</span>
            <span style={{ color: '#0B73A2', fontSize: 36, fontFamily: 'Pacifico', fontWeight: 400, wordWrap: 'break-word' }}>Boost</span>
          </div>
          <img className="Brainboost1" style={{ width: 90, height: 90, left: 0, top: 0, position: 'absolute' }} src="assets\BrainBoost.png" alt="logo" />
        </div>
      </div>
      <div className="Slogn" style={{ width: 680, height: 418, left: 91, top: 236, position: 'absolute' }}>
        <div style={{ width: 680, height: 200, left: 0, top: 0, position: 'absolute', color: 'black', fontSize: 40, fontFamily: 'Inter', fontWeight: 700, wordWrap: 'break-word' }}>Unlock Learning Potential, Explore Infinite Possibilities.</div>
        <div style={{ width: 680, height: 200, left: 0, top: 138, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: 400, wordWrap: 'break-word' }}>Unlock Learning Potential, Explore Infinite Possibilities.Unlock Learning Potential, Explore Infinite Possibilities.Unlock Learning Potential, Explore Infinite Possibilities.Unlock Learning Potential, Explore Infinite Possibilities.</div>
        <div className="RegisterButton" style={{ width: 250, height: 80, left: 289, top: 338, position: 'absolute' }}>
          <div className="Rectangle4" style={{ width: 250, height: 80, left: 0, top: 0, position: 'absolute', background: '#FFF6B4', borderRadius: 50 }} />
          <div style={{ width: 250, height: 80, left: 0, top: 0, position: 'absolute', mixBlendMode: 'exclusion', textAlign: 'center', color: '#F5A96E', fontSize: 24, fontFamily: 'Inter', fontWeight: 700, wordWrap: 'break-word' }}>立即註冊</div>
        </div>
        <div className="LoginButton" style={{ width: 250, height: 80, left: 0, top: 338, position: 'absolute' }}>
          <div className="Rectangle4" style={{ width: 250, height: 80, left: 0, top: 0, position: 'absolute', background: '#FFF6B4', borderRadius: 50 }} />
          <div style={{ width: 250, height: 80, left: 0, top: 0, position: 'absolute', mixBlendMode: 'exclusion', textAlign: 'center', color: '#F5A96E', fontSize: 24, fontFamily: 'Inter', fontWeight: 700, wordWrap: 'break-word' }}>登入</div>
        </div>
      </div>
    </div>
  );
}

export default App;

