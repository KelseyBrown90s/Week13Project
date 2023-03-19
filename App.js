import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}




const Navbar=
 
      <ul style="list-style-type: none;margin: 0;padding: 0;">
<li><a href="homehalloween.html">Home</a></li>
<li><a href="aboutHalloween.html">News</a></li>
<li><a href="contacthalloween.html">Contact</a></li>
</ul>
  ;
  //this is my section for navbar below is a render section for it so it will be at the top of screen.
const root1= ReactDOM.createRoot(document.getElementById('root1'));
root1.render(Navbar);

<br></br>
const LoginForm =
  
      
         <><h3>"Login"</h3><input type="text" placeholder="username"></input><input type="text" placeholder="password"></input></>   
     ;
     const root2 = ReactDOM.createRoot(document.getElementById('root2'));
     root2.render(LoginForm);
//This section is my login form attempt and it is below due to it needing to be neat end of page
export default App;
