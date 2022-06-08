import CheckoutForm from '@components/CheckoutForm';
import Header from '@components/Header';
import Offer from '@interfaces/Offer';
import OfferAPI from '@interfaces/api/Offer';
import { Box } from '@mui/material';
import axios from 'axios';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';
import { GetServerSideProps } from 'next';
import { Snackbar } from '@mui/material';

type Props = {
    offers: Offer[];
};

const Checkout: NextPage<Props> = (props) => {
    const { offers } = props;
    const router = useRouter();
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const onSubmit = async (values: any) => {
        const selectedOffer = offers.find(offer => offer.id === Number(values.offerId)) as Offer;
        const data = { ...values, offerId: selectedOffer.id, couponCode: values.couponCode || null, gateway: selectedOffer.gateway, userId: 1 };

        try {
            await axios.post('https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com/subscription', data);
            await router.push('/success');
        } catch (e) {
            setOpenSnackbar(true);
        }
    };

    return (
        <Fragment>
            <Head>
                <title>Checkout - Whitebook</title>
            </Head>

            <Box>
                <Header />
                <CheckoutForm offers={offers} onSubmit={onSubmit} />
                <Snackbar open={openSnackbar} autoHideDuration={3000} message="Não foi possível concluir sua compra. Tente novamente." />
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