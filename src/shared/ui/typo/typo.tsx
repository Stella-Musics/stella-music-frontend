import styled from "styled-components";

export interface Props {
  color?: string;
}
export const Headline1 = styled.h1<{ color?: string }>`
  font-size: 2.5rem;
  font-weight: bold;
  font-family: "Pretendard";
  color: ${({ color }) => color || "#FFFFFF"};
`;

export const Headline2 = styled.h1<{ color?: string }>`
  font-size: 2rem;
  font-weight: bold;
  font-family: "Pretendard";
  color: ${({ color }) => color || "#FFFFFF"};
`;

export const Headline3 = styled.h1<{ color?: string }>`
  font-size: 1.75rem;
  font-weight: bold;
  font-family: "Pretendard";
  color: ${({ color }) => color || "#FFFFFF"};
`;

export const Title1 = styled.h1<{ color?: string }>`
  font-size: 1.5rem;
  font-weight: bold;
  font-family: "Pretendard";
  color: ${({ color }) => color || "#FFFFFF"};
`;

export const Title2 = styled.h1<{ color?: string }>`
  font-size: 1.25rem;
  font-weight: bold;
  font-family: "Pretendard";
  color: ${({ color }) => color || "#FFFFFF"};
`;

export const Title3 = styled.h1<{ color?: string }>`
  font-size: 1.125rem;
  font-weight: bold;
  font-family: "Pretendard";
  color: ${({ color }) => color || "#FFFFFF"};
`;

export const SubTitle1 = styled.h1<{ color?: string }>`
  font-size: 1.125rem;
  font-weight: 00;
  font-family: "Pretendard";
  color: ${({ color }) => color || "#FFFFFF"};
`;

export const SubTitle2 = styled.h1<{ color?: string }>`
  font-size: 1rem;
  font-weight: 00;
  font-family: "Pretendard";
  color: ${({ color }) => color || "#FFFFFF"};
`;

export const Body1 = styled.h1<{ color?: string }>`
  font-size: 1rem;
  font-weight: 400;
  font-family: "Pretendard";
  color: ${({ color }) => color || "#FFFFFF"};
`;

export const Body2 = styled.h1<{ color?: string }>`
  font-size: 0.875rem;
  font-weight: 400;
  font-family: "Pretendard";
  color: ${({ color }) => color || "#FFFFFF"};
`;

export const Caption1 = styled.h1<{ color?: string }>`
  font-size: 0.8125rem;
  font-weight: 400;
  font-family: "Pretendard";
  color: ${({ color }) => color || "#FFFFFF"};
`;

export const Caption2 = styled.h1<{ color?: string }>`
  font-size: 0.75rem;
  font-weight: 400;
  font-family: "Pretendard";
  color: ${({ color }) => color || "#FFFFFF"};
`;
