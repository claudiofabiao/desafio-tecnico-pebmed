import { FormControl, InputLabel, Select as MuiSelect } from '@mui/material';

const Select = (props: any): JSX.Element => {
    const { field, form, children, ...rest } = props;

    return (
        <FormControl>
            {props.label &&
                <InputLabel id={props.id}>{props.label}</InputLabel>
            }
            <MuiSelect {...field} {...rest}>{children}</MuiSelect>
        </FormControl>
    );
};

export default Select;