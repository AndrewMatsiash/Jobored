import './App.css';
import { getVacancies } from './services/getVacancies';
import { getVacancyById } from './services/getVacancyById';

function App() {
  getVacancies();
  return <div>App</div>;
}

export default App;
