import './App.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './store';

import { Router } from './routes';
import { Center, Heading } from '@chakra-ui/react';

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Center>
            <Heading mt='10px'>Trips</Heading>
          </Center>
          <Router/>
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
