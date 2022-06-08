import NumberFormat from 'react-number-format';

type Props = {
    value: number;
};

const CurrencyFormat = (props: Props): JSX.Element => {
    return (
        <NumberFormat
            displayType="text"
            thousandSeparator="."
            decimalSeparator=","
            decimalScale={2}
            fixedDecimalScale
            prefix="R$ "
            value={props.value}
        />
    );
};

export default CurrencyFormat;