import React from "react";
import { ScrollDirectionType } from "./types";
import { HorizontalScrollArea, VerticalScrollArea } from "./style";

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  direction?: ScrollDirectionType;
}

/*
styled(ScrollArea) 상속해서 크기 지정 가능!
*/
export const ScrollArea = React.forwardRef<HTMLDivElement, Props>(
  ({ direction = "vertical", children, ...props }, ref) => {
    return (
      <>
        {direction === "horizontal" ? (
          <HorizontalScrollArea ref={ref} {...props}>
            {children}
          </HorizontalScrollArea>
        ) : (
          <VerticalScrollArea ref={ref} {...props}>
            {children}
          </VerticalScrollArea>
        )}
      </>
    );
  }
);
