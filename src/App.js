import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as ROUTS from './constants/routes';
const Login = lazy(() => import('./pages/login'));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>loading...</p>}>
        <Routes>
          <Route path={ROUTS.LOGIN} element={<Login />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
