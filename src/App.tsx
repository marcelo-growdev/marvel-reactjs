import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '@mui/material/styles';
import ThemeDefault from './config/theme/Default';

import AppRoutes from './routes/AppRoutes';
import StylesGlobal from './config/GlobalStyles';
import { store, persistor } from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={ThemeDefault}>
          <StylesGlobal />
          <AppRoutes />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
