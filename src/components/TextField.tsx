import { TextField as MuiTextField } from '@mui/material';

const TextField = (props: any): JSX.Element => {
    const { field, form: { touched, errors }, ...rest } = props;
    const hasError: boolean = errors[field.name] && touched[field.name];
    const helperText = hasError ? errors[field.name] : null;

    return (
        <MuiTextField {...field} error={hasError} helperText={helperText} {...rest} />
    );
};

export default TextField;