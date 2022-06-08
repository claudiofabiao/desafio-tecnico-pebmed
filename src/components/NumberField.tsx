import { TextField } from '@mui/material';
import NumberFormat from 'react-number-format';

const NumberField = (props: any): JSX.Element => {
    const { field, form: { touched, errors }, ...rest } = props;

    return (
        <NumberFormat
            name={field.name}
            value={field.value}
            onBlur={field.onBlur}
            onChange={field.onChange}
            error={errors[field.name] && touched[field.name]}
            helperText={errors[field.name] && touched[field.name] ? errors[field.name] : null}
            label={rest.label}
            placeholder={rest.placeholder}
            format={rest.format}
            customInput={TextField}
        />
    );
};

export default NumberField;