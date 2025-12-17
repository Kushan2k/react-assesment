import { Grid, GridItem } from "@chakra-ui/react";
import ChartView from "./ChartView";
import Filters from "./Filters";

export default function DashboardSection() {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap="6">
      <GridItem>
        <Filters />
      </GridItem>
      <GridItem colSpan={3}>
        <ChartView />
      </GridItem>
    </Grid>
  );
}
