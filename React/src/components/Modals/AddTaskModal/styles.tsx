import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
    main: '#4d0011'
    },
    secondary: {
    main: '#ff1744'
    }
  }
});

export const btn = {
  'position': 'absolute',
  'right': '5%',
  'bottom': '8%',
  'text-align': 'right',
}
  
export const modal = {
  'display': 'flex',
  'align-items': 'center',
  'justify-content': 'center'
}

export const box = {
  'position': 'relative',
  'width': '30vw',
  'height': '50vh',
  'bgcolor': '#212121',
  'border': '2px solid #000',
  'boxShadow': 24,
  'p': 4,
}

