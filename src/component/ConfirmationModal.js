
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

export default function ConfirmationModal({ open, onClose, onConfirm, title, description, cancelButtonLabel, confirmButtonLabel }) {

    return (
        <Dialog
            open={open}
            aria-labelledby="responsive-dialog-title"
            data-testid="modal-container"
        >
            <DialogTitle id="responsive-dialog-title">
                <ErrorOutlineIcon />
                {title}
                <IconButton data-testid="close-btn" onClick={onClose} aria-label="close">
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <DialogContentText>{description}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" data-testid="cancel-btn" autoFocus onClick={onClose}>
                    {cancelButtonLabel}
                </Button>
                <Button variant="contained" data-testid="confirm-btn" onClick={onConfirm} autoFocus>
                    {confirmButtonLabel}
                </Button>
            </DialogActions>
        </Dialog>
    );
}