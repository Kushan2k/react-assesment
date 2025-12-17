import { useAppSelector } from "@/hooks/custom_redux";
import { Container } from "@chakra-ui/react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useState } from "react";

export default function ChartView() {
  const categories = useAppSelector((state) => state.data.catagories);
  const selectedCategory = useAppSelector((state) => state.filters.chatagory);

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

  const products = useAppSelector((state) => state.data.products);
  const selectedProducts = useAppSelector((state) => state.filters.product);

  const [categoryInit, setCategoryInit] = useState(
    categories.map((cat) => ({ name: cat, count: 0 }))
  );

  useEffect(() => {}, [selectedCategory, selectedProducts, products]);

  useEffect(() => {
    const updatedCategoryInit = categories.map((cat) => {
      const count = products.filter((prod) => prod.category === cat).length;
      return { name: cat, count };
    });
    setCategoryInit(updatedCategoryInit);
    setCarOptions({
      ...chartoptions,
      categories: updatedCategoryInit.map((cat) => cat.count),
      series: [
        {
          name: "Products",
          data: updatedCategoryInit.map((cat) => cat.name),
        },
      ],
    });
  }, []);

  return (
    <Container width={"100%"} height={"100%"}>
      <HighchartsReact highcharts={Highcharts} options={chartoptions} />
    </Container>
  );
}
