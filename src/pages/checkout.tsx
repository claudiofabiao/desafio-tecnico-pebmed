import CheckoutForm from '@components/CheckoutForm';
import Header from '@components/Header';
import { Box } from '@mui/material';
import axios from 'axios';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

const Checkout: NextPage = () => {
    const router = useRouter();
    const onSubmit = async (values: any) => {
        const response = await axios.post('https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com/subscription', values);
        await router.push('/success');
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