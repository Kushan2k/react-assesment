import { useAppDispatch, useAppSelector } from "@/hooks/custom_redux";
import { runReport } from "@/store/reducers/filter_redeucer";
import { Button } from "@chakra-ui/react";

export default function RunReportButton() {
  const selectCategory = useAppSelector((state) => state.filters.chatagory);
  const selectedProducts = useAppSelector(
    (state) => state.filters.selectedProducts
  );

  const dispatch = useAppDispatch();

  if (selectCategory == "" || selectedProducts?.length == 0) {
    return (
      <Button size={"lg"} disabled>
        Run Report
      </Button>
    );
  }
  return (
    <Button
      onClick={() => {
        dispatch(runReport(true));
      }}
      size={"lg"}
    >
      Run Report
    </Button>
  );
}
