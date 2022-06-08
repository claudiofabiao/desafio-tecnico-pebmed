import Logo from '@components/Logo';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Header = (): JSX.Element => {
    return (
        <Box component="header" padding={2} marginBottom={8} display="flex" alignItems="center" justifyContent="space-between">
            <IconButton size="small" sx={{ color: 'text.primary' }}>
                <ArrowBackIosNewIcon fontSize="inherit" />
            </IconButton>
            <Logo />
            <Box width="28px" height="28px" />
        </Box>
    );
};

export default Header;