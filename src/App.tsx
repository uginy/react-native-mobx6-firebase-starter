import React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components/native';

import { Container, Button, Text, Grid, Col, Row } from 'native-base';
import GuiStore from "./stores/gui.store";


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
`
const App = () => {

    return (
        <Container>
            <StyledGrid>
                    <StyledCol>
                        <Button style={{ backgroundColor: 'red' }} rounded onPress={ () => GuiStore.decrement () }>
                            <Text>Decrement</Text>
                        </Button>
                    </StyledCol>
                    <StyledCol>
                        <Button style={{ backgroundColor: 'blue' }} rounded onPress={ () => GuiStore.increment () }>
                            <Text>Increment</Text>
                        </Button>
                    </StyledCol>
                    <StyledCol>
                        <StyledRow>
                            <Text>Counter</Text>
                            <Text style={ { fontSize: 45 } }>{ GuiStore.counter }</Text>
                        </StyledRow>
                        <StyledRow>
                            <Text>Counter x2</Text>
                            <Text style={ { fontSize: 45 } }>{ GuiStore.doubleCounter }</Text>
                        </StyledRow>
                    </StyledCol>
            </StyledGrid>
        </Container>
    );
};

export default observer ( App )
