import styled from "styled-components";

export const RankTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;
export const RankChangesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 40px;
`;

export const UpTriangle = styled.div`
  width: 0;
  height: 0;
  background-color: transparent;
  border-style: solid;
  border-left-width: 9px;
  border-right-width: 9px;
  border-bottom-width: 18px;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: ${({ theme }) => theme.color.point.red};
`;

export const DownTriangle = styled.div`
  width: 0;
  height: 0;
  background-color: transparent;
  border-style: solid;
  border-left-width: 9px;
  border-right-width: 9px;
  border-top-width: 18px;
  border-left-color: transparent;
  border-right-color: transparent;
  border-top-color: ${({ theme }) => theme.color.point.blue};
`;
