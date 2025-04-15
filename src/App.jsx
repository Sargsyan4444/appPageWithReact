
import './App.css';
import Choose from './Choose';
import Collection from './Collection';
import Footer from './Footer';
import GreatCoffe from './GreatCoffe';
import Header from './Header';
import HowWork from './HowWork';

function App() {
  return (
    <div className="App">
      <Header/>
      <GreatCoffe/>
      <Collection/>
      <Choose/>
      <HowWork/>
      <Footer/>
    </div>
  );
}

export default App;
