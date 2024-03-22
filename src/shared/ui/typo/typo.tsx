import styled from "styled-components";

export interface Props {
  color?: string;
}
export const Headline1 = styled.h1<{ color?: string }>`
  font-size: 40px;
  font-weight: bold;
  font-family: "Pretendard";
  color: ${({ color }) => color || "#FFFFFF"};
`;

export const Headline2 = styled.h1<{ color?: string }>`
  font-size: 32px;
  font-weight: bold;
  font-family: "Pretendard";
  color: ${({ color }) => color || "#FFFFFF"};
`;

export const Headline3 = styled.h1<{ color?: string }>`
  font-size: 28px;
  font-weight: bold;
  font-family: "Pretendard";
  color: ${({ color }) => color || "#FFFFFF"};
`;

export const Title1 = styled.h1<{ color?: string }>`
  font-size: 24px;
  font-weight: bold;
  font-family: "Pretendard";
  color: ${({ color }) => color || "#FFFFFF"};
`;

export const Title2 = styled.h1<{ color?: string }>`
  font-size: 20px;
  font-weight: bold;
  font-family: "Pretendard";
  color: ${({ color }) => color || "#FFFFFF"};
`;

export const Title3 = styled.h1<{ color?: string }>`
  font-size: 18px;
  font-weight: bold;
  font-family: "Pretendard";
  color: ${({ color }) => color || "#FFFFFF"};
`;

export const Body1 = styled.h1<{ color?: string }>`
  font-size: 16px;
  font-weight: 400;
  font-family: "Pretendard";
  color: ${({ color }) => color || "#FFFFFF"};
`;

export const Body2 = styled.h1<{ color?: string }>`
  font-size: 14px;
  font-weight: 400;
  font-family: "Pretendard";
  color: ${({ color }) => color || "#FFFFFF"};
`;

export const Caption1 = styled.h1<{ color?: string }>`
  font-size: 13px;
  font-weight: 400;
  font-family: "Pretendard";
  color: ${({ color }) => color || "#FFFFFF"};
`;

export const Caption2 = styled.h1<{ color?: string }>`
  font-size: 12px;
  font-weight: 400;
  font-family: "Pretendard";
  color: ${({ color }) => color || "#FFFFFF"};
`;
