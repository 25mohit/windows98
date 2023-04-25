import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './Style.css'
import Desktop from './components/Screens/Desktop/Desktop'
import TaskBar from './components/Utilities/TaskBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Desktop />} />
        </Routes>
        <TaskBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
