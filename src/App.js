import logo from './logo.svg';
import './App.css';
import "@polkadot-cloud/core/accent/polkadot-relay.css";
import "@polkadot-cloud/core/theme/cloud/index.css";
import Page from './page/Page.component.jsx';
function App() {
  return (
    <div className='theme-polkadot-relay theme-light '>
    <div className="App">
    <Page/>
    
    </div>
  </div>
  );
}

export default App;
