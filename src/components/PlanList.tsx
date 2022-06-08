import PlanListItem from '@components/PlanListItem';
import { Stack } from '@mui/material';

const PlanList = (props: any): JSX.Element => {
    const { field, ...rest } = props;

    return (
        <Stack spacing={1.5}>
            <PlanListItem
                field={field}
                id={1}
                title="Anual"
                description="À Vista"
                price={600}
                discount={60}
                order={1}
            />

            <PlanListItem
                field={field}
                id={2}
                title="Anual"
                description="Parcelado"
                price={600}
                discount={60}
                order={2}
            />
        </Stack>
    );
};

export default PlanList;