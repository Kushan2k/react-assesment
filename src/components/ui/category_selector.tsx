import { useAppDispatch, useAppSelector } from "@/hooks/custom_redux";
import { setChatagory } from "@/store/reducers/filter_redeucer";
import { Portal, Select, createListCollection } from "@chakra-ui/react";

export default function CategorySelector() {
  const categories = useAppSelector((state) => state.data.catagories);

  const categoriesCollection = createListCollection({
    items: categories.map((category) => ({
      value: category,
      label: category,
    })),
  });

  const dispatch = useAppDispatch();

  const handleCategoryChange = (value: string) => {
    // Dispatch action to update selected category in the store
    dispatch(setChatagory(value));
  };

  return (
    <Select.Root
      onSelect={(details) => {
        handleCategoryChange(details.value);
      }}
      collection={categoriesCollection}
      size="md"
      width="320px"
    >
      <Select.HiddenSelect />
      <Select.Label>Select category</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select Category" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {categoriesCollection.items.map((category) => (
              <Select.Item item={category} key={category.value}>
                {category.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
}
