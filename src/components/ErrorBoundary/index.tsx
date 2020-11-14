import React, { ErrorInfo } from 'react'
import { observer } from 'mobx-react';
import { Card, CardItem, Text } from "native-base";

export class ErrorBoundary extends React.Component<any, any> {
    state = {
        error: false,
        errorInfo: ''
    }

    static getDerivedStateFromError( error: Error ) {
        // console.log (error)
        return { error: true };
    }

    componentDidCatch( error: Error, errorInfo: ErrorInfo ) {
        // deal with errorInfo if needed
        this.setState ( () => ({ errorInfo: error.message }) )
        console.log ( '[R][Error]', error )
        console.log ( '[R][ErrorInfo]', errorInfo )
    }

    render() {
        if ( this.state.error ) {
            // You can render any custom fallback UI
            return (
                <Card>
                    <CardItem header>
                        <Text>{ this.state.errorInfo }</Text>
                    </CardItem>
                </Card>
            )
        } else {
            return (
                <>
                    { this.props.children }
                </>
            )
        }
    }
}

export default observer ( ErrorBoundary )
