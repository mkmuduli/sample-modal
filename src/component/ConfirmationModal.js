
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
                    width: '452px',
                    height: "176px",
                    background: '#FFFFFF',
                    boxShadow: ' 0px 24px 48px rgba(0, 0, 0, 0.08)',
                    borderRadius: '8px',
                    p: "24px",
                }
            }}

        >
            <DialogTitle
                id="responsive-dialog-title"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    p: "0px",
                }}>
                <IconButton sx={{
                    bgcolor: "#FEE4E2",
                    color: 'error.main',
                    p: '11px',
                    '& svg': { width: "18px", height: '18px' }
                }}>
                    <ErrorOutlineIcon />
                </IconButton>
                <Typography component="h6" variant='h6' sx={{ color: '#070F2C', ml: '16px', fontWeight: '700' }} >{title}</Typography>
                <IconButton
                    sx={{
                        position: 'absolute',
                        top: "24px",
                        right: '24px',
                        p: "0px",
                        '& svg': { width: "20px", height: '20px', p: "2px" }
                    }}
                    data-testid="close-btn"
                    onClick={onClose}
                    aria-label="close">
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent sx={{ pl: '56px', pb: "32px", pt: "24px !important" }}>
                <DialogContentText>{description}</DialogContentText>
            </DialogContent>
            <DialogActions sx={{ p: "0px" }}>
                <Button sx={{
                    height: '40px',
                    color: '#344054',
                    borderColor: 'rgba(8, 15, 54, 0.32)',
                    borderRadius: '8px',
                    textTransform: 'capitalize',
                    fontWeight: 400,
                    fontSize: '16px',
                }}
                    variant="outlined"
                    data-testid="cancel-btn"
                    autoFocus onClick={onClose}>
                    {cancelButtonLabel}
                </Button>
                <Button sx={{
                    height: '40px',
                    bgcolor: '#F04438',
                    color: "#fff",
                    borderRadius: '8px',
                    textTransform: 'capitalize',
                    fontWeight: 400,
                    fontSize: '16px',
                    '&:hover': {
                        bgcolor: 'error.light',
                    }
                }}
                    autoCapitalize
                    variant="contained"
                    data-testid="confirm-btn"
                    onClick={onConfirm} autoFocus>
                    {confirmButtonLabel}
                </Button>
            </DialogActions>
        </Dialog>
    );
}