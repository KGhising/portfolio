import './Themes/App.scss';
import Topbar from './Navigation/TopBar'

function App() {
  return (
    <div className="App">
      <div className="top-navbar-container">
        <Topbar />
      </div>
      <div className="sort-info">
        <p>Hi, I'm a UI/UX designer<br />based on Kathmandu, Nepal.</p>
        <div className="underline"></div>
      </div>
    </div>
  );
}

export default App;
