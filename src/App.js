import React from 'react';
import './App.css';
import ContactCard from './Components/ContactCard'
import Decrement from './Components/Decrement'

function App() {
  return (
    <div className="App">
      <h1>Contact Cards:</h1>
      <div className="Contact-Cards">
        <ContactCard
          name={'Jessica'}
          mobileNumber={'123-456-7890'}
          workNumber={'243-233-3225'}
          email={'jessica@email.net'}    
        />
        <ContactCard
          name={'Tom'}
          mobileNumber={'444-666-7891'}
          workNumber={'678-901-2345'}
          email={'tom@email.com'}    
        />
        <ContactCard
          name={'Robert'}
          mobileNumber={'123-532-8008'}
          workNumber={'124-233-5435'}
          email={'rob@gmail.com'}    
        />
      </div>
      <h1>Decrement:</h1>
      <Decrement count={5} />
    </div>
  )
}

export default App;
