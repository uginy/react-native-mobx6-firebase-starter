import React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components/native';

import { Container, Button, Text, Grid, Col, Row } from 'native-base';
import { rootStore } from "../stores/root.store";
import { theme } from '../lib/theme';


const StyledGrid = styled ( Grid )`
  background-color: #635DB7;
`
const StyledCol = styled ( Col )`
  background-color: silver;
  border: 1px solid black;
  justify-content: center;
`
const StyledRow = styled ( Row )`
  background-color: green;
  border: 1px solid black;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const InitialScreen = () => {
    const { guiStore } = rootStore;
    return (
        <Container>
            <StyledGrid>
                <StyledCol>
                    <StyledRow>
                        <Button style={ { backgroundColor: theme.primary } } rounded
                                onPress={ () => guiStore.reset () }>
                            <Text>Reset</Text>
                        </Button>
                    </StyledRow>
                    <StyledRow>
                        <Button style={ { backgroundColor: 'red' } } rounded onPress={ () => {
                            guiStore.decrement ()
                        } }>
                            <Text>Decrement</Text>
                        </Button>
                    </StyledRow>
                </StyledCol>
                <StyledCol style={ { width: '40%', alignItems: 'center' } }>
                    <Button style={ { backgroundColor: 'blue' } } rounded onPress={ () => {
                        guiStore.increment ()
                    } }>
                        <Text>Increment</Text>
                    </Button>
                </StyledCol>
                <StyledCol>
                    <StyledRow>
                        <Text>Counter</Text>
                        <Text style={ { fontSize: 45 } }>{ guiStore.counter }</Text>
                    </StyledRow>
                    <StyledRow>
                        <Text>Counter x2</Text>
                        <Text style={ { fontSize: 45 } }>{ guiStore.doubleCounter }</Text>
                    </StyledRow>
                    <StyledRow>
                        <Text>Fibo</Text>
                        <Text style={ { fontSize: 45 } }>{ 'test' }</Text>
                    </StyledRow>
                </StyledCol>
            </StyledGrid>
        </Container>

    );
};

export default observer ( InitialScreen )
