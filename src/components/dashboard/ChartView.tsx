import { useAppSelector } from "@/hooks/custom_redux";
import { Container } from "@chakra-ui/react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useState } from "react";

export default function ChartView() {
  //get categories and products from redux store
  const categories = useAppSelector((state) => state.data.catagories);
  //get selected category from redux store
  const selectedCategory = useAppSelector((state) => state.filters.chatagory);

  //chart options state
  const [chartoptions, setCarOptions] = useState<any>({
    chart: {
      type: "column",
    },
    title: {
      text: "Product in selected category",
    },
    xAxis: {
      categories: [],
    },
    yAxis: {
      title: {
        text: "Count",
      },
    },
    series: [
      {
        name: "Products",
        data: [],
      },
    ],
  });

  //get products from redux store
  const products = useAppSelector((state) => state.data.products);
  const selectedProducts = useAppSelector(
    (state) => state.filters.selectedProducts
  );

  const [categoryInit, setCategoryInit] = useState(
    categories.map((cat) => ({ name: cat, count: 0 }))
  );

  //get isLoading state
  const isloading = useAppSelector((state) => state.data.isLoading);

  useEffect(() => {
    const countprodutforSelectedCategory = products.filter(
      (prod) => prod.category === selectedCategory
    ).length;

    setCarOptions({
      ...chartoptions,
      categories: [selectedCategory],
      series: [
        {
          name: "Products",
          data: [countprodutforSelectedCategory],
        },
      ],
    });

    //if no category is selected show all categories with count of products
  }, [selectedCategory, selectedProducts]);

  useEffect(() => {
    const updatedCategoryInit = categories.map((cat) => {
      console.log(cat);

      const count = products.filter((prod) => prod.category === cat).length;
      return { name: cat, count };
    });

    console.log("updatedCategoryInit", updatedCategoryInit);
    setCategoryInit(updatedCategoryInit);
    setCarOptions({
      ...chartoptions,
      categories: updatedCategoryInit.map((cat) => cat.name),
      series: [
        {
          name: "Products",
          data: updatedCategoryInit.map((cat) => cat.count),
        },
      ],
    });
  }, [isloading]);

  return (
    <Container width={"100%"} height={"100%"}>
      <HighchartsReact highcharts={Highcharts} options={chartoptions} />
    </Container>
  );
}
