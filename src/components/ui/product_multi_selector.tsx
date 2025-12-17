import { useAppDispatch, useAppSelector } from "@/hooks/custom_redux";
import { addtoSelectedProducts } from "@/store/reducers/filter_redeucer";
import { createListCollection, Portal, Select } from "@chakra-ui/react";

export default function ProductMultiSelector() {
  //get the products from the store
  const products = useAppSelector((state) => state.data.products);

  const productCollection = createListCollection({
    items: products?.map((product) => ({
      value: product.title,
      label: product.title.split("-")[0].trim(),
    })),
  });

  //get the selected category from the store
  const selectedCategory = useAppSelector((state) => state.filters.chatagory);

  const dispatch = useAppDispatch();

  return (
    <Select.Root
      multiple
      collection={productCollection}
      size="sm"
      width="320px"
      onSelect={(details) => {
        dispatch(addtoSelectedProducts(details.value));
      }}
    >
      <Select.HiddenSelect />
      <Select.Label>Select product</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select product" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {selectedCategory == "" ? (
              <div className="p-4">Please select category first</div>
            ) : (
              productCollection.items.map((product) => {
                if (
                  product.value
                    .toLocaleLowerCase()
                    .includes(selectedCategory.toLocaleLowerCase())
                ) {
                  return (
                    <Select.Item item={product} key={product.value}>
                      {product.label}
                      <Select.ItemIndicator />
                    </Select.Item>
                  );
                }
              })
            )}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
}
