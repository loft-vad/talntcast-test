import './App.css';
import Content from './components/Content';
import Faq from './components/Faq';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app-content">
      <Sidebar />
      <Content />
      <Faq />
    </div>
  );
}

export default App;
