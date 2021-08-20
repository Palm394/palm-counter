import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    typography: {
      fontFamily: ['Londrina Solid','cursive'].join(','),
    },
    palette: {
        main: '#777777',
        second:'#DDDBDB',
        text: {
            main: '#8E8E8E',
        },
    },
});