import CardBrands from '@components/CardBrands';
import NumberField from '@components/NumberField';
import PlanList from '@components/PlanList';
import Select from '@components/Select';
import TextField from '@components/TextField';
import { LoadingButton } from '@mui/lab';
import { Box, Button, Chip, Grid, Typography, MenuItem } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

type Props = {
    onSubmit: (values: any) => void;
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
    const { onSubmit } = props;
    const initialValues = {
        creditCardNumber: '',
        cardExpirationDate: '',
        creditCardCVV: '',
        creditCardHolder: '',
        creditCardCPF: '',
        couponCode: '',
        installments: 1,
        offerId: 1
    };

    return (
        <Box maxWidth="870px" marginX="auto">
            <Formik initialValues={initialValues} validationSchema={Schema} onSubmit={onSubmit}>
                {(formik) => (
                    <Form>
                        <Grid container justifyContent="space-between">
                            <Grid item xs="auto">
                                <Box width="330px">
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

                                        <Grid item xs={12}>
                                            <Field name="installments" component={Select} label="Número de parcelas">
                                                <MenuItem value={1}>1x</MenuItem>
                                                <MenuItem value={2}>2x</MenuItem>
                                                <MenuItem value={3}>3x</MenuItem>
                                            </Field>
                                        </Grid>
                                    </Grid>

                                    <LoadingButton loading={formik.isSubmitting} disabled={!formik.dirty || !formik.isValid} type="submit" fullWidth sx={{ paddingY: '18px', borderRadius: 10 }}>Finalizar pagamento</LoadingButton>
                                </Box>
                            </Grid>

                            <Grid item xs="auto">
                                <Box width="330px">
                                    <Typography component="h1" color="text.primary" fontSize="1.25rem" marginBottom={1}>Confira o seu plano:</Typography>

                                    <Box marginBottom={2}>
                                        <Chip label="lorem@ipsum.com.br" variant="outlined" />
                                    </Box>

                                    <Box marginBottom={4}>
                                        <Field
                                            name="offerId"
                                            component={PlanList}
                                            items={[]}
                                        />
                                    </Box>

                                    <Box display="flex" justifyContent="center">
                                        <Button variant="text" size="small" sx={{ color: 'text.primary' }}>Sobre a cobrança</Button>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>

                        <Box display="flex" justifyContent="space-between"></Box>
                    </Form>
                )}
            </Formik>
        </Box>
    );
};

export default CheckoutForm;