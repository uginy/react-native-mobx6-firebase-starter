import * as styledComponents from 'styled-components';

const {
    default: styled,
    css,
    keyframes,
    ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<IThemeInterface>;

export interface IThemeInterface {
    primary: string,
    blue1: string,
    textColor: string,
    inactiveColor: string,
    darkRow: string
    black: string
    red: string
    white: string,
    green: string,
    gray: string
}

export const theme: IThemeInterface = {
    primary      : '#2B95AA',
    blue1        : '#5FA2D8',
    textColor    : '#464646',
    inactiveColor: '#B1B6B9',
    darkRow      : '#F5F7F7',
    black        : '#103236',
    red          : 'red',
    green        : 'green',
    gray         : 'dimgray',
    white        : '#ffffff'
};

export default styled;
export { css, keyframes, ThemeProvider };
