import { fetchData } from "../../store/reducers/data_reducer";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/custom_redux";
import { Button } from "../ui/button";
export default function Filters() {
  const dispatch = useAppDispatch();

  const catogories = useAppSelector((state) => state.data.catagories);
  const products = useAppSelector((state) => state.data.products);

  const loading = useAppSelector((state) => state.data.isLoading);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-5">
      <div className="title_row flex flex-row items-center justify-between">
        <h2 className="text-2xl font-bold">Filters</h2>
        <Button variant={"ghost"} title="Clear">
          Clear
        </Button>
      </div>
    </div>
  );
}
