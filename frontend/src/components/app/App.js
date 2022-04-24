import './App.css';

import Homepage from '../homepage'

const fakeStats = { routes: 1, countries: 4, kms: undefined }
const currentUser = false
const countries = ["Kanada", "Italien", "Österreich", "Irland"]

function App() {
  return (
    <div className="App">
      <Homepage 
        currentUser={currentUser}
        stats={fakeStats} 
        countries={countries}
      />
    </div >
  );
}

export default App;
