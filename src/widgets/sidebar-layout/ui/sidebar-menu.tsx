import React, { forwardRef } from "react";

export interface Props {
  isSelected: boolean;
  onClick: () => void;
  selected: React.ReactNode;
  unselected: React.ReactNode;
}

export const SideBarMenuItem = ({
  isSelected,
  onClick,
  selected,
  unselected,
}: Props) => {
  return <div onClick={onClick}>{isSelected ? selected : unselected}</div>;
};
