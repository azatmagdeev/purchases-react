import React from 'react';
import './App.css';
import Form from './components/Form';
import PurchasesList from './components/PurchasesList';
import Stats from './components/Stats'

function App() {
  return (
   <div>
     <Form/>
     <PurchasesList/>
     <Stats/>
   </div>
     );
}

export default App;
