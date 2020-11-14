import React from 'react';
import { observer, Provider } from 'mobx-react';
import { rootStore } from "./stores/root.store";
import { theme, ThemeProvider } from './lib/theme';
import ErrorBoundary from "./components/ErrorBoundary";
import AppNavigator from "./navigation/AppNavigator";

const App = () => {
    return (
        <ErrorBoundary>
            <Provider rootStore={ rootStore }>
                <ThemeProvider theme={ theme }>
                    <AppNavigator/>
                </ThemeProvider>
            </Provider>
        </ErrorBoundary>
    );
};

export default observer ( App )
