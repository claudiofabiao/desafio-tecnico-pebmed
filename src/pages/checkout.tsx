import CheckoutForm from '@components/CheckoutForm';
import Header from '@components/Header';
import { Box } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';

const Checkout: NextPage = () => {
    const onSubmit = async (values: any) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
    };

    return (
        <Fragment>
            <Head>
                <title>Checkout - Whitebook</title>
            </Head>

            <Box p={4}>
                <Header />
                <CheckoutForm onSubmit={onSubmit} />
            </Box>
        </Fragment>
    );
};

export default Checkout;