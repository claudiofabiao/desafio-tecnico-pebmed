import CheckoutForm from '@components/CheckoutForm';
import Header from '@components/Header';
import Offer from '@interfaces/Offer';
import OfferAPI from '@interfaces/api/Offer';
import { Box } from '@mui/material';
import axios from 'axios';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { GetServerSideProps } from 'next';

type Props = {
    offers: Offer[];
};

const Checkout: NextPage<Props> = (props) => {
    const { offers } = props;
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

            <Box>
                <Header />
                <CheckoutForm offers={offers} onSubmit={onSubmit} />
            </Box>
        </Fragment>
    );
};

const getServerSideProps: GetServerSideProps = async (context) => {
    const response = await axios.get<OfferAPI[]>('https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com/offer');

    const offers: Offer[] = response.data.map(offer => {
        const { discountAmmount, ...rest } = offer;
        const discountAmount = discountAmmount;
        const discountedPrice = rest.fullPrice - discountAmount;
        const total = rest.fullPrice * rest.installments;
        const discountedTotal = discountedPrice * rest.installments;

        return { discountAmount, discountedPrice, total, discountedTotal, ...rest };
    });

    return {
        props: {
            offers
        }
    };
};

export { getServerSideProps };
export default Checkout;