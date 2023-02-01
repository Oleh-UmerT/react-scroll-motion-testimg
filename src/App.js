import './App.css';
import Header from './components/Header';
import FirstPart from './components/FirstPart';
import SecondPart from './components/SecondPart';
import ThirdPart from './components/ThindPart';
import { ScrollContainer} from 'react-scroll-motion';

function App() {
  return (
    <ScrollContainer snap="mandatory">
      <Header />
      <FirstPart />
      <SecondPart />
      <ThirdPart />
    </ScrollContainer>
  );
}

export default App;
