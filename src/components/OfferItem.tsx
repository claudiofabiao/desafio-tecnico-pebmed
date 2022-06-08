import CurrencyFormat from '@components/CurrencyFormat';
import Offer from '@interfaces/Offer';
import { Box, Chip, Radio, Typography } from '@mui/material';
import { FieldInputProps } from 'formik';

type Props = {
    data: Offer;
    field: FieldInputProps<string>;
};

const OfferItem = (props: Props): JSX.Element => {
    const { data: { id, title, description, total, discountedTotal, discountedPrice, discountPercentage, splittable, installments }, field } = props;

    const formattedDiscountPercentage = discountPercentage * 100 + '%';

    return (
        <Box border={1} borderColor="primary.main" borderRadius={3} p={2.5} display="flex" alignItems="center" justifyContent="space-between">
            <Box display="flex" alignItems="center">
                <Box width="185px" marginRight={1.5}>
                    <Typography fontWeight="bold" color="primary" fontSize="0.875rem" marginBottom={0.5}>{title} | {description}</Typography>
                    <Typography fontSize="0.75rem" color="primary" marginBottom={0.5}>De <CurrencyFormat value={total} /> | Por <CurrencyFormat value={discountedTotal} /></Typography>
                    {splittable &&
                        <Typography fontSize="0.625rem" color="secondary">Em até {installments}x de <CurrencyFormat value={discountedPrice} />/mês</Typography>
                    }
                </Box>
                <Box>
                    <Chip color="secondary" label={formattedDiscountPercentage} sx={{ fontSize: '0.625rem', color: 'white', height: '16px' }} />
                </Box>
            </Box>
            <Radio name={field.name} value={id} checked={id === Number(field.value)} onChange={field.onChange} />
        </Box>
    );
};

export default OfferItem;