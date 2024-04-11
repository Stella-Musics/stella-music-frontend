import { useMediaQuery } from "react-responsive";

/* Ref: ../theme/size-theme */
export type MediaType =
  | "extraSmall"
  | "small"
  | "medium"
  | "large"
  | "extraLarge";

export interface Props {
  type: MediaType;
}

export const useMedia = ({ type }: Props) => {
  const minWidth = () => {
    switch (type) {
      case "extraSmall":
        return 0;
      case "small":
        return 375;
      case "medium":
        return 754;
      case "large":
        return 1200;
      case "extraLarge":
        return 1536;
    }
  };

  const isMatchedMedia = useMediaQuery({ minWidth: minWidth() });
  return isMatchedMedia;
};
