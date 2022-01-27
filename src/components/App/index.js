// == Import

import Header from '../Header';
import Play from '../Play';
import Footer from '../Footer';
import './app.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Play />
    <Footer />
  </div>
);

// == Export
export default App;
