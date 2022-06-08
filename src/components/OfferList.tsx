import OfferItem from '@components/OfferItem';
import Offer from '@interfaces/Offer';
import { Stack } from '@mui/material';
import { FieldInputProps, FormikProps } from 'formik';
import { ReactNode } from 'react';

type Props = {
    items: Offer[];
    field: FieldInputProps<string>;
    form: FormikProps<any>;
    children: ReactNode;
};

const OfferList = (props: Props): JSX.Element => {
    const { field, items } = props;

    return (
        <Stack spacing={1.5}>
            {items.map(item => (
                <OfferItem key={item.id} data={item} field={field} />
            ))}
        </Stack>
    );
};

export default OfferList;