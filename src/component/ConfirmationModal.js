
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { Typography } from '@mui/material';

export default function ConfirmationModal({ open, onClose, onConfirm, title, description, cancelButtonLabel, confirmButtonLabel }) {

    return (
        <Dialog
            open={open}
            aria-labelledby="responsive-dialog-title"
            data-testid="modal-container"
            PaperProps={{
                sx: {
                    width: '500px',
                    background: '#FFFFFF',
                    boxShadow: ' 0px 24px 48px rgba(0, 0, 0, 0.08)',
                    borderRadius: '8px',
                    p: "24px",

                }
            }}

        >
            <DialogTitle id="responsive-dialog-title" sx={{display:'flex', alignItems:'center'}}>
                <IconButton sx={{ bgcolor: "#FEE4E2", color: 'error.main', mr: '16px' }}><ErrorOutlineIcon /></IconButton>
                <Typography component="h6" variant='h6' sx={{ color: '#070F2C' }} >{title}</Typography>
                <IconButton sx={{ position: 'absolute', top: "20px", right: '20px', '& svg': { width: "20px", height: '20px' } }} data-testid="close-btn" onClick={onClose} aria-label="close">
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent sx={{pl:'80px'}}>
                <DialogContentText>{description}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button sx={{ height: '40px', color: '#344054', borderColor: 'rgba(8, 15, 54, 0.32)' }} variant="outlined" data-testid="cancel-btn" autoFocus onClick={onClose}>
                    {cancelButtonLabel}
                </Button>
                <Button sx={{
                    height: '40px', bgcolor: '#F04438', color: "#fff", '&:hover': {
                        bgcolor: 'error.light'
                    }
                }} variant="contained" data-testid="confirm-btn" onClick={onConfirm} autoFocus>
                    {confirmButtonLabel}
                </Button>
            </DialogActions>
        </Dialog>
    );
}