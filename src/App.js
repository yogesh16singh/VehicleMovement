import React from 'react';
import './App.css';
import WrappedMap from './components/gMap/Map';

import config from './components/gMap/config';
import useFetch from './hooks/useFetch';
import Header from './components/Header/Header';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

function App() {
  
  const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${config.mapsKey}`;
  const paths = [
    { lat: 26.1458689, lng: 74.3374102 },
    { lat: 26.153628, lng:74.339458  },
    { lat: 26.1619861, lng: 74.2922201 },
    
  ];
  
  const stops = {
    data: [
      { id: '1', lat: 26.1458689, lng: 74.3374102 },
      { id: '2', lat: 26.153628, lng:74.339458  },
      { id: '3', lat: 26.1619861, lng: 74.2922201 },
     
    ]
  };
  
  return (
    <div className="App">
      
      <Header/>
      
      { paths && stops ?
        <WrappedMap
            paths={paths}
            stops={stops}
            googleMapURL={mapURL}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div className='mapContainer'  />}
            mapElement={<div style={{ height: `100%` }} />}
          />
          : 
          <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>
        }
    </div>
  );
}

export default App;
