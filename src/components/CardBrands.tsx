import americanexpress from '@assets/images/card-brands/americanexpress.svg';
import dinnersclub from '@assets/images/card-brands/dinnersclub.svg';
import elo from '@assets/images/card-brands/elo.svg';
import mastercard from '@assets/images/card-brands/mastercard.svg';
import visa from '@assets/images/card-brands/visa.svg';
import iugulogo from '@assets/images/iugu-logo.svg';
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';

const CardBrands = () => {
    return (
        <Box>
            <Stack direction="row" justifyContent="center" spacing={2} marginBottom={2}>
                <Image alt="MasterCard" src={mastercard} layout="raw" />
                <Image alt="DinnersClub" src={dinnersclub} layout="raw" />
                <Image alt="American Express" src={americanexpress} layout="raw" />
                <Image alt="Visa" src={visa} layout="raw" />
                <Image alt="Elo" src={elo} layout="raw" />
            </Stack>

            <Box display="flex" alignItems="center" justifyContent="center">
                <Typography color="#E1DEE8" fontSize="0.625rem" marginRight={1}>Pagamentos por</Typography>
                <Image alt="Logo Iugu" src={iugulogo} layout="raw" />
            </Box>
        </Box>
    );
};

export default CardBrands;