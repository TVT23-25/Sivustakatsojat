import './App.css';
import Navbar from './components/navbar';
import Notifications from './components/notifications';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Notifications />
      <Header />
      <Content />
      <Footer/>
      </div>
  );

}

export default App;