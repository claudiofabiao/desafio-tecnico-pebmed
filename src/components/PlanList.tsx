import PlanListItem from '@components/PlanListItem';
import { Stack } from '@mui/material';

type Props = {
    items: any[];
};

const PlanList = ({ items }: Props): JSX.Element => {
    return (
        <Stack spacing={1.5}>
            <PlanListItem
                id={1}
                title="Anual"
                description="À Vista"
                price={600}
                discount={60}
                order={1}
            />

            <PlanListItem
                id={1}
                title="Anual"
                description="Parcelado"
                price={600}
                discount={60}
                order={1}
            />
        </Stack>
    );
};

export default PlanList;