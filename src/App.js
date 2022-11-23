import './App.css';
import Contenedor from './componente/contenedor/Contenedor';
import {Helmet} from 'react-helmet';
// fuente TMB https://www.youtube.com/watch?v=CCdZZeRH8II&t=116s

function App() {

  return (
    <>
       <Helmet>
			    <title>App</title>
		   </Helmet>

      <Contenedor/>
    </>
  );
}

export default App;
