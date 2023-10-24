import { Suspense, lazy, useEffect, useState, useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AuthContext from './context/AuthContext';
import Home from './pages/Dashboard/Home';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import LandingPage from './pages/LandingPage'
import Loader from './common/Loader';
import routes from './routes';

const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

const PrivateRoute = ({children, ...rest}) => {
  let { authTokens } = useContext(AuthContext);
  const isAuthenticated = authTokens != null;
  return ( isAuthenticated ? (
    children
  ) : (
    <Navigate to="/auth/signin" />
  ) 
  );
  }

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerClassName="overflow-auto"
      />
      <Routes>
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route element={<DefaultLayout />}>
          <Route index element={<Home />} />
          {routes.map((routes, index) => {
            const { path, component: Component } = routes;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Suspense fallback={<Loader />}>
                    <Component />
                  </Suspense>
                }
              />
            );
          })}
        </Route>
      </Routes>
    </>
  );
}

export default App;


    // <>
    //   <Toaster
    //     position="top-right"
    //     reverseOrder={false}
    //     containerClassName="overflow-auto"
    //   />
    //   <Routes>
    //     <Route path="/auth/signin" element={<SignIn />} />
    //     <Route path="/auth/signup" element={<SignUp />} />
    //     <Route element={<DefaultLayout />}>
    //       <Route index element={<Home />} />
    //       {routes.map((routes, index) => {
    //         const { path, component: Component } = routes;
    //         return (
    //           <Route
    //             key={index}
    //             path={path}
    //             element={
    //               <Suspense fallback={<Loader />}>
    //                 <Component />
    //               </Suspense>
    //             }
    //           />
    //         );
    //       })}
    //     </Route>
    //   </Routes>
    // </>

