import { fetchData } from "../../store/reducers/data_reducer";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/custom_redux";
import { Box, Button, Heading, Spacer } from "@chakra-ui/react";
import CategorySelector from "../ui/category_selector";
import ProductMultiSelector from "../ui/product_multi_selector";
import { setChatagory, setProduct } from "@/store/reducers/filter_redeucer";
import RunReportButton from "../ui/run_report_btn";

export default function Filters() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.data.isLoading);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  //   const selectedCategory = useAppSelector((state) => state.filters.chatagory);
  //   const selectedProducts = useAppSelector((state) => state.filters.product);

  function onclearClick() {
    dispatch(setChatagory(""));
    dispatch(setProduct(""));
  }

  return (
    <div className="p-5">
      <div className="title_row flex flex-row items-center justify-between">
        <Heading size={"4xl"}>Filters</Heading>
        <Button onClick={onclearClick} size={"sm"}>
          Clear
        </Button>
      </div>
      <Box mt={10}>
        <CategorySelector />
        <Spacer mt={10} />
        <ProductMultiSelector />
      </Box>
      <Box mt={10}>
        <RunReportButton />
      </Box>
    </div>
  );
}
