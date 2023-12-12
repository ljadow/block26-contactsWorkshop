import { useState } from 'react';
import ContactList from './components/ContactList';
import SelectedContact from './components/SelectedContact';
import './App.css'

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)

  return (
    <div>
      {(selectedContactId) ?
        (<div><SelectedContact selectedContactId={selectedContactId} /></div>)
        : (<ContactList selectedFn={setSelectedContactId} />)}
    </div>
  )
}

export default App
