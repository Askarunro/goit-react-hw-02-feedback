import logo from './logo.svg';
import './App.css';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification'

function App() {
  return (
    <div>
      <h1>Please leave feedback</h1>
      <Statistics/>
      <Notification message="There is no feedback"/>
    </div>

  );
}

export default App;
