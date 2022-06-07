import star from '@assets/images/star-icon.svg';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

type Props = {
    title: string;
    description: string;
    email: string;
    document: string;
};

const SubscriptionDetails = (props: Props): JSX.Element => {
    const { title, description, email, document } = props;

    return (
        <Box borderRadius={3} boxShadow="0px 4px 20px 0px rgba(0, 0, 0, 0.05)" padding={2}>
            <Box bgcolor="#f4f3f6" borderRadius={3} padding={2.5} display="flex" alignItems="center" justifyContent="space-between" marginBottom={2} >
                <Image alt="Ícone" src={star} />
                <Box textAlign="right" color="primary.main">
                    <Typography marginBottom={1}>{title} | {description}</Typography>
                    <Typography fontSize="0.875rem">R$ 479,90 | 10x R$ 47,99</Typography>
                </Box>
            </Box>

            <Box paddingX={2.5}>
                <Box display="flex" justifyContent="space-between" marginBottom={2}>
                    <Typography fontSize="0.875rem" color="#c9c5d4">E-mail</Typography>
                    <Typography fontSize="0.875rem" color="text.primary">{email}</Typography>
                </Box>

                <Box display="flex" justifyContent="space-between">
                    <Typography fontSize="0.875rem" color="#c9c5d4">CPF</Typography>
                    <Typography fontSize="0.875rem" color="text.primary">{document}</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default SubscriptionDetails;