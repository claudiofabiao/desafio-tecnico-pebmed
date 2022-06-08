import Header from '@components/Header';
import SubscriptionDetails from '@components/SubscriptionDetails';
import { Box, Button, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Fragment } from 'react';
import successIcon from '@assets/images/success-icon.svg';

const Success: NextPage = () => {
    return (
        <Fragment>
            <Head>
                <title>Sucesso - Whitebook</title>
            </Head>

            <Box>
                <Header />

                <Box maxWidth="340px" padding={2} marginX="auto">
                    <Box marginBottom={9} textAlign="center">
                        <Box marginBottom={2.5}>
                            <Image alt="Ícone" src={successIcon} layout="raw" />
                        </Box>

                        <Typography component="h1" color="primary" fontSize="1.25rem" marginBottom={1.5}>Parabéns!</Typography>
                        <Typography color="#C9C5D4">Sua assinatura foi realizada com sucesso.</Typography>
                    </Box>

                    <Box marginBottom={9}>
                        <SubscriptionDetails
                            title="Anual"
                            description="Parcelado"
                            email="lorem@ipsum.com.br"
                            document="999.999.9999-99"
                        />
                    </Box>

                    <Button variant="text" fullWidth sx={{ paddingY: '18px', borderRadius: 10, marginBottom: 2 }}>Gerenciar assinatura</Button>
                    <Button fullWidth sx={{ paddingY: '18px', borderRadius: 10 }}>Ir para a home</Button>
                </Box>
            </Box>
        </Fragment>
    );
};

export default Success;