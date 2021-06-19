import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppState, { AppContext } from './pages/appstate';
import { useContext, useEffect } from 'react';

import ToDo from './pages/todo'
import Register from './pages/register'
import Login from './pages/login'
// import Navbar from './pages/navbar'



function App() {
  const context = useContext(AppContext);
	console.log(context);

	useEffect(() => {}, []);

  return (
    <BrowserRouter>
      <AppState>
        <Switch>
        {/* <Route >
          <Navbar />
        </Route> */}
        <Route >
						<Register />
					</Route>
        <Route >
          <Login />
        </Route>

        <Route >
          <ToDo />
        </Route>

        </Switch>
      </AppState>
          
    </BrowserRouter>

  
    
    
  );
}

export default App;
