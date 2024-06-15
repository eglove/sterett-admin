import type { PropsWithChildren } from "react";

import { TimeDisplay } from "./time-display.js";

type UpdateItemProperties = PropsWithChildren & {
  readonly date?: string;
};

export function UpdateItem({ date, children }: UpdateItemProperties) {
  if (date !== undefined) {
    return (
      <li>
        <TimeDisplay date={date} /> - {children}
      </li>
    );
  }

  return <li>{children}</li>;
}
