import styled from "styled-components";

export const DropdownContainer = styled.div`
  max-width: 150px;
  position: relative;
`;

export const DropdownLabel = styled.label`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border-radius: 12px;
  gap: 8px;
  width: fit-content;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.onBackground};
`;

export const DropdownContentContainer = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen === true ? "block" : " none")};
  position: absolute;
  width: 100%;
  left: 0;
  background: ${({ theme }) => theme.color.onBackground};
  border-radius: 12px;

  ul {
    list-style-type: none;
    padding: 8px;
    margin: 0;
  }
  ul li {
    margin: 0.4rem 0;
  }
`;

export const DropdownContentWrapper = styled.div<{ isselected: boolean }>`
  padding: 12px 12px;
  border-radius: 12px;
  background-color: ${({ theme, isselected }) =>
    isselected ? theme.color.cardBackground : "transparent"};
  cursor: pointer;
`;
