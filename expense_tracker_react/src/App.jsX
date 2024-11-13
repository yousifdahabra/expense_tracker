import './styles/App.css';
import './styles/dashboard.css';
import './styles/fontawesome/css/font-awesome.min.css';
import './styles/base/color.css';
import './styles/base/base.css';
import './styles/base/flex.css';

import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Dashboard/>
    </div>
  );
}

export default App;
