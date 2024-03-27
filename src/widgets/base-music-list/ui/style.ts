import styled from "styled-components";

export const BaseMusicListContainer = styled.div``;

export const BaseMusicListHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 24px 40px;
  border-radius: 16px 16px 0 0;
  margin-top: 100px;
  background-color: ${({ theme }) => theme.color.onBackground};
`;

export const TitleLabelWrapper = styled.div`
  width: 60%;

  & > * {
    padding-left: 10%;
  }
`;

export const DefaultLabelWrapper = styled.div`
  width: 20%;
  text-align: center;
`;
