import AboutBilling from '@components/AboutBilling';
import CardBrands from '@components/CardBrands';
import CurrencyFormat from '@components/CurrencyFormat';
import HelpIcon from '@components/HelpIcon';
import NumberField from '@components/NumberField';
import OfferList from '@components/OfferList';
import Select from '@components/Select';
import TextField from '@components/TextField';
import Offer from '@interfaces/Offer';
import { LoadingButton } from '@mui/lab';
import { Box, Button, Chip, Grid, MenuItem, Typography } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

type Props = {
    onSubmit: (values: any) => void;
    offers: Offer[];
};

const errorMessages = {
    required: 'Este campo é obrigatório.'
};

const Schema = Yup.object().shape({
    creditCardNumber: Yup.string().required(errorMessages.required),
    cardExpirationDate: Yup.string().required(errorMessages.required),
    creditCardCVV: Yup.string().required(errorMessages.required),
    creditCardHolder: Yup.string().required(errorMessages.required),
    creditCardCPF: Yup.string().required(errorMessages.required),
    couponCode: Yup.string(),
    offerId: Yup.string().required(errorMessages.required)
});

const CheckoutForm = (props: Props): JSX.Element => {
    const { offers, onSubmit } = props;
    const initialValues = {
        creditCardNumber: '',
        cardExpirationDate: '',
        creditCardCVV: '',
        creditCardHolder: '',
        creditCardCPF: '',
        couponCode: '',
        installments: 1,
        offerId: null
    };

    return (
        <Box maxWidth="870px" marginX="auto">
            <Formik initialValues={initialValues} validationSchema={Schema} onSubmit={onSubmit}>
                {(formik) => {
                    const selectedOffer = offers.find(offer => offer.id === Number(formik.values.offerId));

                    return (
                        <Form>
                            <Grid container justifyContent="space-between" flexDirection={{ xs: 'column', md: 'row' }} alignItems={{ xs: 'center', md: 'flex-start' }}>
                                <Grid item xs="auto" order={{ xs: 1, md: 0 }}>
                                    <Box maxWidth="346px" padding={2}>
                                        <Box marginBottom={4} color="text.primary">
                                            <Typography component="h1" fontSize="1.25rem" marginBottom={2}>Estamos quase lá!</Typography>
                                            <Typography component="h2">Insira seus dados de pagamento abaixo:</Typography>
                                        </Box>

                                        <Box marginBottom={4}>
                                            <CardBrands />
                                        </Box>

                                        <Grid container spacing={4} marginBottom={4}>
                                            <Grid item xs={12}>
                                                <Field
                                                    name="creditCardNumber"
                                                    component={NumberField}
                                                    label="Número do cartão"
                                                    placeholder="0000 0000 0000 0000"
                                                    format="#### #### #### ####"
                                                />
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Field
                                                    name="cardExpirationDate"
                                                    component={NumberField}
                                                    label="Validade"
                                                    placeholder="MM/AA"
                                                    format="##/##"
                                                />
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Field
                                                    name="creditCardCVV"
                                                    component={NumberField}
                                                    label="CVV"
                                                    placeholder="000"
                                                    format="###"
                                                />
                                            </Grid>

                                            <Grid item xs={12}>
                                                <Field
                                                    name="creditCardHolder"
                                                    component={TextField}
                                                    label="Nome impresso no cartão"
                                                    placeholder="Seu nome"
                                                />
                                            </Grid>

                                            <Grid item xs={12}>
                                                <Field
                                                    name="creditCardCPF"
                                                    component={NumberField}
                                                    label="CPF"
                                                    placeholder="000.000.000-00"
                                                    format="###.###.###-##"
                                                />
                                            </Grid>

                                            <Grid item xs={12}>
                                                <Field
                                                    name="couponCode"
                                                    component={TextField}
                                                    label="Cupom"
                                                    placeholder="Insira aqui"
                                                />
                                            </Grid>

                                            {selectedOffer && selectedOffer.splittable &&
                                                <Grid item xs={12}>
                                                    <Field name="installments" component={Select} label="Número de parcelas">
                                                        {(() => {
                                                            const items = [];
                                                            for (let i = 1; i <= selectedOffer.installments; i++) {
                                                                items.push(<MenuItem value={i}>{i}x (<CurrencyFormat value={selectedOffer.discountedTotal / i} />/mês)</MenuItem>);
                                                            }
                                                            return items;
                                                        })()}
                                                    </Field>
                                                </Grid>
                                            }
                                        </Grid>

                                        <LoadingButton loading={formik.isSubmitting} disabled={!formik.dirty || !formik.isValid} type="submit" fullWidth sx={{ paddingY: '18px', borderRadius: 10 }}>Finalizar pagamento</LoadingButton>
                                    </Box>
                                </Grid>

                                <Grid item xs="auto" order={{ xs: 0, md: 1 }}>
                                    <Box maxWidth="346px" padding={2}>
                                        <Typography component="h1" color="text.primary" fontSize="1.25rem" marginBottom={1}>Confira o seu plano:</Typography>

                                        <Box marginBottom={2}>
                                            <Chip label="lorem@ipsum.com.br" variant="outlined" />
                                        </Box>

                                        <Box marginBottom={4}>
                                            <Field
                                                name="offerId"
                                                component={OfferList}
                                                items={offers}
                                            />
                                        </Box>

                                        <Box display="flex" justifyContent="center">
                                            <AboutBilling />
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>

                            <Box display="flex" justifyContent="space-between"></Box>
                        </Form>
                    );
                }}
            </Formik>
        </Box>
    );
};

export default CheckoutForm;