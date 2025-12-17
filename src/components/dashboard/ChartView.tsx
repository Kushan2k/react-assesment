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
    if (selectedCategory == "") {
      runInitChart();
      return;
    }

    const countprodutforSelectedCategory = products.filter(
      (prod) => prod.category === selectedCategory
    ).length;

    setCarOptions({
      ...chartoptions,
      chart: {
        type: "column",
      },
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
    if (!isloading) {
      runInitChart();
    }

    //run filters after the changing of loading state
  }, [isloading]);

  //this urnction will run to created the initial chart with initail data
  function runInitChart() {
    const updatedCategoryInit = categories.map((cat) => {
      console.log(cat);

      const count = products.filter((prod) => prod.category === cat).length;
      return { name: cat, count };
    });

    console.log("updatedCategoryInit", updatedCategoryInit);
    const catlist = Object.keys(updatedCategoryInit);
    setCategoryInit(updatedCategoryInit);
    setCarOptions({
      ...chartoptions,
      chart: {
        type: "pie",
      },
      categories: catlist,
      series: [
        {
          name: "Products",
          data: updatedCategoryInit.map((cat) => cat.count),
        },
      ],
    });
  }

  const runReport = useAppSelector((state) => state.filters.runReport);

  useEffect(() => {
    //only run when runReport is true
    if (!runReport) return;

    if (selectedProducts && selectedProducts.length > 0) {
      const filteredProducts = products.filter((product) =>
        selectedProducts.includes(product.title.split("--")[0].trim())
      );

      const categoryCountMap: { [key: string]: number } = {};

      filteredProducts.forEach((product) => {
        if (categoryCountMap[product.category]) {
          categoryCountMap[product.category] += 1;
        } else {
          categoryCountMap[product.category] = 1;
        }
      });

      const categories = Object.keys(categoryCountMap);
      const counts = Object.values(categoryCountMap);

      setCarOptions({
        ...chartoptions,
        chart: {
          type: "column",
        },
        xAxis: {
          categories: categories,
        },
        series: [
          {
            name: "Products",
            data: counts,
          },
        ],
      });
    } else {
      runInitChart();
    }

    //reset runReport to false after running the report
    //to prevent infinite loop
  }, [runReport]);

  if (isloading) {
    return (
      <Container width={"100%"} height={"100%"}>
        Loading chart...
      </Container>
    );
  }

  return (
    <Container width={"100%"} height={"100%"}>
      <HighchartsReact highcharts={Highcharts} options={chartoptions} />
    </Container>
  );
}
