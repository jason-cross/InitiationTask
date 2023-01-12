import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const add_btn_style = {
  'position': 'absolute',
  'right': '5%',
  'bottom': '8%',
  // 'margin-top': '5px',
  'text-align': 'right'
}

const save_btn_style = {
  'position': 'absolute',
  'right': '5%'
}

const modal_style = {
  'display': 'flex',
  'align-items': 'center',
  'justify-content': 'center'
}

const box_style = {
  'position': 'relative',
  'width': '50vw',
  'height': '50vh',
  'bgcolor': 'background.paper',
  'border': '2px solid #000',
  'boxShadow': 24,
  'p': 4,
}

function AddTaskModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSave = () => {
    setOpen(false);
  }

  return (
    <div>
      <Button 
        sx={add_btn_style} 
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
          <h1>Add task</h1>
          <Button
            sx={add_btn_style} 
            variant='contained' 
            onClick={handleSave}
            size='large'
          >
            Save
          </Button>
        </Box>
      </Modal>
    </div>
  )
}

export default AddTaskModal;