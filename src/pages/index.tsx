// src/pages/index.tsx
import PriceTable from '../components/PriceTable';
import SymbolModal from '../components/SymbolModal';
import React from 'react';

const Home = () => {
  const [symbol, setSymbol] = React.useState('');
  return (
    <div>
      <h1>Real-Time Stock/Crypto Prices</h1>
      <SymbolModal symbol = {symbol} setSymbol = {setSymbol} />
      <PriceTable symbol = {symbol} />
    </div>
  );
};

export default Home;
