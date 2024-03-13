import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { ListItem, ListItemAvatar, ListItemText, Button, Avatar, Divider } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  outline: 'none',
  borderRadius: 2,
  boxShadow: 24,
  p: 2,
};

const tasks = [1, 1, 1, 1]

export default function UserList({ handleClose, open }) {

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {
            tasks.map((item, index) =>
              <>
                <div className='flex items-center justify-between w-full'>
                  <div>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar src='https://cdn-icons-png.flaticon.com/512/10667/10667582.png' />
                      </ListItemAvatar>
                      <ListItemText
                        primary={"Code with Dino"}
                        secondary="@Code with Dino" />
                    </ListItem>
                  </div>

                  <div>
                    <Button className='customButton'>Select</Button>
                  </div>


                </div>
                {index !== tasks.length - 1 && <Divider variant='inset' />}
              </>
            )
          }
        </Box>
      </Modal>
    </div>
  );
}