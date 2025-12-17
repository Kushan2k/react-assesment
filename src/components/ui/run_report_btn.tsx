import { useAppSelector } from "@/hooks/custom_redux";
import { Button } from "@chakra-ui/react";

export default function RunReportButton() {
  const selectCategory = useAppSelector((state) => state.filters.chatagory);
  const selectedProducts = useAppSelector((state) => state.filters.product);

  if (selectCategory == "" && selectedProducts == "") {
    return (
      <Button size={"lg"} disabled>
        Run Report
      </Button>
    );
  }
  return <Button size={"lg"}>Run Report</Button>;
}
