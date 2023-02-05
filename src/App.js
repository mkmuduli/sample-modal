import { useState } from 'react';
import Button from '@mui/material/Button';
import ConfirmationModal from './component/ConfirmationModal';

function App() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => { setOpen(true); };
  const handleClose = () => { setOpen(false); };
  const handleConfirm = () => { console.log("confirm clicked "); }

  return (
    < >
      <ConfirmationModal
        open={open}
        onClose={handleClose}
        onConfirm={handleConfirm}
        title="Unclosed Overdue Pay Runs"
        description="Would you like to skip unclosed periods and start with this pay run (January 2023)?"
        cancelButtonLabel="Back"
        confirmButtonLabel="Skip Unclosed Periods" />
      <Button variant="contained" onClick={handleClickOpen}>Open Modal</Button>
    </>
  );
}

export default App;
