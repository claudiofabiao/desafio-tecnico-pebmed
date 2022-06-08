import HelpIcon from '@components/HelpIcon';
import { Button, ClickAwayListener, Tooltip } from '@mui/material';
import { useState } from 'react';

const AboutBilling = (): JSX.Element => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <ClickAwayListener onClickAway={handleClose}>
            <Tooltip title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." arrow open={open} PopperProps={{ disablePortal: true }} onClose={handleClose} disableHoverListener disableFocusListener disableTouchListener>
                <Button variant="text" size="small" sx={{ color: 'text.primary' }} endIcon={<HelpIcon />} onClick={handleOpen}>Sobre a cobrança</Button>
            </Tooltip>
        </ClickAwayListener>
    );
};

export default AboutBilling;