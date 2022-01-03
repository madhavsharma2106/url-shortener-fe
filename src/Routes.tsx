import { BrowserRouter, Routes as RRDRoutes, Route } from 'react-router-dom';
import { Home } from './components/pages';

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <RRDRoutes>
        <Route path="/" element={<Home />}></Route>
      </RRDRoutes>
    </BrowserRouter>
  );
};
