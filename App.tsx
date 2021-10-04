import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {PermissionsProvider} from './src/context/PermissionsContext';
import MyStack from './src/navigator/StackNavigator';

const AppState = ({children}: any) => {
  return <PermissionsProvider>{children}</PermissionsProvider>;
};

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <MyStack />
      </AppState>
    </NavigationContainer>
  );
};

export default App;
