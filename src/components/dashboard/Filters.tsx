import { fetchData } from "../../store/reducers/data_reducer";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/custom_redux";
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
    <div>
      {catogories.map((cat, index) => (
        <div key={index}>{cat}</div>
      ))}
    </div>
  );
}
