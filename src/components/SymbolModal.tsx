import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPrices } from '../store/slices/priceSlice';

const SymbolModal = ({symbol, setSymbol}) => {
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSymbol(e.target.value);
  };

  const handleSubmit = () => {
    if(symbol === '')
      return;
    dispatch(fetchPrices(symbol))
  };

  return (
    <div>
      <input type="text" value={symbol} onChange={handleChange} placeholder="Enter stock/crypto symbol" />
    </div>
  );
};

export default SymbolModal;
