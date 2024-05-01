import { size } from "./size-theme";

export const media = {
  /** 0+ */
  extraSmall: `@media (min-width: ${size.extraSmall}px)`,
  /** 430+ */
  small: `@media (min-width: ${size.small}px)`,
  /** 754+ */
  medium: `@media (min-width: ${size.medium}px)`,
  /** 1200+ */
  large: `@media (min-width: ${size.large}px)`,
  /** 1536+ */
  extraLarge: `@media (min-width: ${size.extraLarge}px)`,
};

export type MediaType = typeof media;
