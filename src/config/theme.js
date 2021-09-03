import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
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