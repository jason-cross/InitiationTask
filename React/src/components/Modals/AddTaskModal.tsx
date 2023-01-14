import React, { useState } from 'react';
import { User } from '../../utility/Data';
import {
  Button,
  Modal,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  createTheme,
  ThemeProvider
} from '@mui/material';

interface IProps {
  userList: User[]
}

const add_btn_style = {
  'position': 'absolute',
  'right': '5%',
  'bottom': '8%',
  'text-align': 'right',
  // 'background-color': '#4d0011'
}

const modal_style = {
  'display': 'flex',
  'align-items': 'center',
  'justify-content': 'center'
}

const box_style = {
  'position': 'relative',
  'width': '30vw',
  'height': '50vh',
  'bgcolor': '#212121',
  'border': '2px solid #000',
  'boxShadow': 24,
  'p': 4,
}

const theme = createTheme({
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

function AddTaskModal(props: IProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSave = () => {
    setOpen(false);
  }

  return (
    <ThemeProvider theme={theme}>
      <Button 
        sx={add_btn_style} 
        color='primary'
        variant='contained' 
        onClick={handleOpen}
        size='large'
      >
        Add Task
      </Button>
      <Modal 
        sx={modal_style} 
        open={open} 
        onClose={handleClose}
      >
        <Box sx={box_style}>
          <h1 style={{'color':'#fff'}}>Add Task</h1>
          <TextField color='secondary' fullWidth sx={{mt: 3}} label='Task Name' variant='outlined' />
          <FormControl color='secondary' sx={{mt: 5, minWidth: '50%'}}>
            <InputLabel>User</InputLabel>
            <Select label='User'>
              {props.userList.map(({firstName, lastName}) => (
                <MenuItem value={`${firstName} ${lastName}`}>{`${firstName} ${lastName}`}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl color='secondary' sx={{position: 'absolute', mt: 5, minWidth: '30%', right: '5%'}}>
            <InputLabel>Status</InputLabel>
            <Select label='Status'>
              <MenuItem value={'Complete'}>Complete</MenuItem>
              <MenuItem value={'Incomplete'}>Incomplete</MenuItem>
            </Select>
          </FormControl>
          <Button
            sx={add_btn_style}
            color='secondary'
            variant='contained' 
            onClick={handleSave}
            size='large'
          >
            Save
          </Button>
        </Box>
      </Modal>
    </ThemeProvider>
  )
}

export default AddTaskModal;