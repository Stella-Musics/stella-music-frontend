import "styled-components";
import { SizeType, MediaType, ColorType } from "./";

declare module "styled-components" {
  export interface DefaultTheme {
    size: SizeType;
    media: MediaType;
    color: ColorType;
  }
}
