import './styles/App.css';
import Header from './components/Header';
import ForexSizer from './components/ForexSizer';
import { Divider } from '@mui/material';

function App() {
  return (
    <div>
      <Header />
      <div style={{display: 'flex', flexDirection: 'row', paddingTop: '100px', justifyContent: 'space-around'}}>
        <div style={{width: '35%'}}>
          <ForexSizer />
        </div>
        <Divider orientation="vertical" flexItem />
        <div style={{width: '35%'}}>
          {/* <ForexSizer /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
