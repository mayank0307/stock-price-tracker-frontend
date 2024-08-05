import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { fetchPrices, clearPrices } from '../store/slices/priceSlice';

const PriceTable = ({ symbol }: { symbol: string }) => {
  const dispatch = useDispatch<AppDispatch>();
  const prices = useSelector((state: RootState) => state.prices);

  useEffect(() => {
    if (!symbol) return;

    const fetchData = () => {
      dispatch(clearPrices()); // Clear the existing prices
      dispatch(fetchPrices(symbol)); // Fetch the new prices
    };

    // Fetch data initially and set up an interval
    fetchData();
    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, [dispatch, symbol]);

  return (
    <table>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Rate</th>
          <th>Volume</th>
          <th>Cap</th>
          <th>Hour</th>
          <th>Day</th>
          <th>Week</th>
          <th>Month</th>
          <th>Quarter</th>
          <th>Year</th>
          <th>Timestamp</th>
        </tr>
      </thead>
      <tbody>
        {prices.map((price) => (
          <tr key={price.timestamp}>
            <td>{price.symbol}</td>
            <td>{price.rate}</td>
            <td>{price.volume}</td>
            <td>{price.cap}</td>
            <td>{price.delta.hour}</td>
            <td>{price.delta.day}</td>
            <td>{price.delta.week}</td>
            <td>{price.delta.month}</td>
            <td>{price.delta.quarter}</td>
            <td>{price.delta.year}</td>
            <td>{new Date(price.timestamp).toLocaleTimeString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PriceTable;
