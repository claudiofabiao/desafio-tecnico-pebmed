import { Box, Chip, Radio, Typography } from '@mui/material';

type Props = {
    id: number;
    title: string;
    description: string;
    price: number;
    discount: number;
    order: number;
};

const PlanListItem = ({ id, title, description, price, discount, order }: Props): JSX.Element => {
    return (
        <Box border={1} borderColor="primary.main" borderRadius={3} p={2.5} display="flex" alignItems="center" justifyContent="space-between">
            <Box display="flex" alignItems="center">
                <Box marginRight={1.5}>
                    <Typography fontWeight="bold" color="primary" fontSize="0.875rem" marginBottom={0.5}>{title} | {description}</Typography>
                    <Typography fontSize="0.75rem" color="primary" marginBottom={0.5}>De R$ 514,80  |  Por R$ 436,90</Typography>
                    <Typography fontSize="0.625rem" color="secondary">10x de R$ 43,69/mês</Typography>
                </Box>
                <Box>
                    <Chip color="secondary" label="15%" sx={{ fontSize: '0.625rem', color: 'white', height: '16px' }} />
                </Box>
            </Box>
            <Radio value={1} checked={true} />
        </Box>
    );
};

export default PlanListItem;