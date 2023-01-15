import React, { useEffect, useState } from 'react';
import { User, Todo } from '../../utility/Data';
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
  userList: User[],
  todoList: Todo[],
  setTodoList: Function
}

const add_btn_style = {
  'position': 'absolute',
  'right': '5%',
  'bottom': '8%',
  'text-align': 'right',
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
  //Initialise use states
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState('');
  const [task, setTask] = useState('');
  const [complete, setComplete] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);

  const handleOpen = () => {
    setOpen(true);
    setUser('');
    setTask('');
    setComplete(false);
  }

  const handleClose = () => setOpen(false);

  const handleSave = async() => {
    //Set id of new todo item -- avoid clashes by incrementing last elements id
    const lastIndex = Math.max(0, props.todoList.length - 1);
    const id = props.todoList[lastIndex]?.id + 1 || 1;

    //Update new todolist item
    const todoListCopy = JSON.parse(JSON.stringify(props.todoList));
    todoListCopy.push({id, user, name: task, isComplete: complete});
    props.setTodoList(todoListCopy);
    setOpen(false);
  }

  //Set whether the save button is enabled ensuring that all fields have been filled in
  useEffect(() => {
    setBtnDisabled((user && task) ? false : true);
  }, [user, task, complete]);

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
          <TextField 
            color='secondary' 
            fullWidth sx={{mt: 3}} 
            label='Task Name' 
            variant='outlined'
            onChange={(e) => {setTask(e.target.value)}}
          />
          <FormControl color='secondary' sx={{mt: 5, minWidth: '50%'}}>
            <InputLabel>User</InputLabel>
            <Select 
              label='User'
              value={user}
              onChange={(e) => {setUser(e.target.value)}}
            >
              {props.userList.map(({firstName, lastName}) => (
                <MenuItem value={`${firstName} ${lastName}`}>{`${firstName} ${lastName}`}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl color='secondary' sx={{position: 'absolute', mt: 5, minWidth: '30%', right: '5%'}}>
            <InputLabel>Status</InputLabel>
            <Select 
              label='Status'
              value={complete}
              onChange={(e => {setComplete(Boolean(e.target.value === 'true'))})}
            >
              <MenuItem value={'true'}>Complete</MenuItem>
              <MenuItem value={'false'}>Incomplete</MenuItem>
            </Select>
          </FormControl>
          <Button
            sx={add_btn_style}
            color='secondary'
            variant='contained' 
            onClick={handleSave}
            size='large'
            disabled={btnDisabled}
          >
            Save
          </Button>
        </Box>
      </Modal>
    </ThemeProvider>
  )
}

export default AddTaskModal;