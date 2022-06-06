import Logo from '@components/Logo';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Header = (): JSX.Element => {
    return (
        <Box component="header" paddingX={4} marginBottom={8} display="flex" alignItems="center" justifyContent="space-between">
            <IconButton size="small" sx={{ color: 'text.primary' }}>
                <ArrowBackIosNewIcon />
            </IconButton>
            <Logo />
            <Box />
        </Box>
    );
};

export default Header;