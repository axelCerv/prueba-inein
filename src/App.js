import './App.css';
import Navbar from './components/Navbar';

function App({children}) {
  return (
    <>
      <Navbar />
      <div className='content'>
        
        { children }
      
      </div>
    </>
  );
}

export default App;
