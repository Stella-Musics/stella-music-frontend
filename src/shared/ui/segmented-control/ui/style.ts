import styled from "styled-components";

export const SegmentedControlContainer = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  border-radius: 16px;
  width: fit-content;
  background-color: ${({ theme }) => theme.color.onBackground};
`;

export const SegmentedControlTabWrapper = styled.div<{ isSelected: boolean }>`
  padding: 12px 24px;
  border-radius: 12px;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.color.cardBackground : "transparent"};
  cursor: pointer;
`;
