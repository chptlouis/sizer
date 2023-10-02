import Header from './components/Header';
import ForexSizer from './components/ForexSizer';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  // const [pairs, setPairs] = useState([]);

  // useEffect(() => {
  //   const fetchPairs = async () => {
  //     const res = await axios.get('http://localhost:3000/pairs');
  //     setPairs(res.data);
  //   }
  //   fetchPairs();
  // }, []);

  const pairs = [
      ['XAUUSD', 100],
      ['XAGUSD', 5000],
      ['EURUSD', 100000],
      ['EURAUD', 100000],
      ['EURCAD', 100000],
      ['EURCHF', 100000],
      ['GBPUSD', 100000],
      ['EURGBP', 100000],
      ['EURJPY', 100000],
      ['USDJPY', 100000],
      ['AUDUSD', 100000],
      ['NZDUSD', 100000],
      ['NDQ100', 10],
      ['SPX500', 10],
      ['GER30', 10],
      ['AUDCAD', 100000],
  ];

  return (
    <div>
      <Header />
      <div style={{display: 'flex', flexDirection: 'row', paddingTop: '100px', justifyContent: 'space-around'}}>
        <div style={{width: '50%'}}>
          <ForexSizer pairs={pairs} />
        </div>
      </div>
    </div>
  );
}

export default App;
