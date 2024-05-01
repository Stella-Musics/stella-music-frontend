import { useState } from "react";
import {
  DropdownContainer,
  DropdownContentContainer,
  DropdownContentWrapper,
  DropdownLabel,
} from "./style";
import { Body1, Title3 } from "../typo";
import { ArrowTriangleDown } from "../icons";

interface Props<T extends string> extends React.HTMLAttributes<HTMLDivElement> {
  items: T[];
  selectedItem: T;
  didSelect: (item: T) => void;
}

export const Dropdown = <T extends string>({
  items,
  selectedItem,
  didSelect,
}: Props<T>) => {
  const [isExpand, setIsExpand] = useState(false);
  return (
    <DropdownContainer
      tabIndex={0}
      onBlur={() => {
        setIsExpand(false);
      }}
    >
      <DropdownLabel onClick={() => setIsExpand(!isExpand)}>
        <Title3>{selectedItem}</Title3>
        <ArrowTriangleDown size={16} />
      </DropdownLabel>
      <DropdownContentContainer isOpen={isExpand}>
        <ul>
          {items.map((item) => (
            <li>
              <DropdownContentWrapper
                isselected={item === selectedItem}
                onClick={() => didSelect(item)}
              >
                <Body1>{item}</Body1>
              </DropdownContentWrapper>
            </li>
          ))}
        </ul>
      </DropdownContentContainer>
    </DropdownContainer>
  );
};
