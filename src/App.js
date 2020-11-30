import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainDisplay from './components/MainDisplay/MainDisplay'
import InfoBar from './components/InfoBar/InfoBar'
import Footer from './components/Footer/Footer'
import {useState} from 'react'

import Container from 'react-bootstrap/Container'

export const lightTheme = {
  color: 'black',
  backgroundColor: 'white',
}
export const darkTheme = {
  color: 'white',
  backgroundColor: '#262626',
}

function App() {

  const [pageTheme, setPageTheme] = useState(darkTheme)

  return (
    <div className="App">
      <div className='fullScreen' style={pageTheme}>
        <Container style={{width: '750px'}}>
          <InfoBar 
            pageTheme={pageTheme}
            setPageTheme={setPageTheme}
            lightTheme={lightTheme}
            darkTheme={darkTheme}
          />
          <MainDisplay 
            pageTheme={pageTheme}
            setPageTheme={setPageTheme}
            lightTheme={lightTheme}
            darkTheme={darkTheme}
          />
          <Footer />
        </Container>
      </div>
    </div>
  );
}

export default App;
