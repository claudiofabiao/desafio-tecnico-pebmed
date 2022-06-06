import CardBrands from '@components/CardBrands';
import PlanList from '@components/PlanList';
import { LoadingButton } from '@mui/lab';
import {
    Box,
    Button,
    Chip,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography
} from '@mui/material';
import { Form, Formik } from 'formik';
import NumberFormat from 'react-number-format';

type Props = {
    onSubmit: (values: any) => void;
};

const CheckoutForm = (props: Props): JSX.Element => {
    const { onSubmit } = props;

    return (
        <Box maxWidth="870px" marginX="auto">
            <Formik initialValues={{}} onSubmit={onSubmit}>
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
                                            <NumberFormat
                                                format="#### #### #### ####"
                                                mask="_"
                                                label="Número do cartão"
                                                placeholder="0000 0000 0000 0000"
                                                customInput={TextField}
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <NumberFormat
                                                format="##/##"
                                                mask="_"
                                                label="Validade"
                                                placeholder="MM/AA"
                                                customInput={TextField}
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <NumberFormat
                                                format="###"
                                                label="CVV"
                                                placeholder="000"
                                                customInput={TextField}
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <TextField
                                                label="Nome impresso no cartão"
                                                placeholder="Seu nome"
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <NumberFormat
                                                label="CPF"
                                                placeholder="000.000.000-00"
                                                format="###.###.###-##"
                                                customInput={TextField}
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <TextField
                                                label="Cupom"
                                                placeholder="Insira aqui"
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <FormControl sx={{ minWidth: 80 }}>
                                                <InputLabel id="numero-parcelas">Número de parcelas</InputLabel>
                                                <Select
                                                    labelId="numero-parcelas"
                                                    displayEmpty
                                                    value={1}
                                                    label="Número de parcelas"
                                                >
                                                    <MenuItem value={1}>1x</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>

                                    <LoadingButton loading={formik.isSubmitting} type="submit" fullWidth sx={{ paddingY: '18px', borderRadius: 10 }}>Finalizar pagamento</LoadingButton>
                                </Box>
                            </Grid>

                            <Grid item xs="auto">
                                <Box width="330px">
                                    <Typography component="h1" color="text.primary" fontSize="1.25rem" marginBottom={1}>Confira o seu plano:</Typography>

                                    <Box marginBottom={2}>
                                        <Chip label="lorem@ipsum.com.br" variant="outlined" />
                                    </Box>

                                    <Box marginBottom={4}>
                                        <PlanList items={[]} />
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