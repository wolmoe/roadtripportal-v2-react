import './App.css';
import Navbar from '../shared/navbar';
import Footer from '../shared/footer';
import Homepage from '../homepage'
import Roadtrips from '../roadtrips'

import roadtrips from '../../seedRoutes'


const fakeStats = { routes: 1, countries: 4, kms: undefined }
const currentUser = false
const countries = ["Kanada", "Italien", "Österreich", "Irland"]

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Homepage 
        currentUser={currentUser}
        stats={fakeStats} 
        countries={countries}
      /> */}
      <Roadtrips roadtrips={roadtrips}/>
      <Footer />
    </div >
  );
}

export default App;
