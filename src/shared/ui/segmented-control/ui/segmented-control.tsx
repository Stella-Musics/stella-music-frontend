import { ReactNode } from "react";
import { Title3 } from "../../typo";
import { SegmentedControlContainer, SegmentedControlTabWrapper } from "./style";

export interface Props<T extends string> {
  items: T[];
  selectedItem?: T;
  display?: (item: T) => ReactNode;
  didSelect: (item: T) => void;
}

export const SegmentedControl = <T extends string>({
  items,
  selectedItem,
  display,
  didSelect,
}: Props<T>) => {
  return (
    <SegmentedControlContainer>
      {items.map((item) => (
        <SegmentedControlTabWrapper
          isSelected={item === selectedItem}
          onClick={() => didSelect(item)}
        >
          {display ? display(item) : <Title3>{item}</Title3>}
        </SegmentedControlTabWrapper>
      ))}
    </SegmentedControlContainer>
  );
};
