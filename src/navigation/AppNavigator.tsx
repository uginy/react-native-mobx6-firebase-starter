import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import InitialScreen from './InitialScreen';

const AppNavigator = createSwitchNavigator ( {
        initialScreen: { screen: InitialScreen },
    }, { initialRouteName: 'initialScreen' }
);

export default createAppContainer ( AppNavigator );
