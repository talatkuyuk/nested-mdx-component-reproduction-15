import React from "react";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import type { MDXComponents } from "mdx/types";

import type { JSX as ReactJSX } from "react";
declare global {
  namespace JSX {
    type IntrinsicElements = ReactJSX.IntrinsicElements;
  }
}

export default async function Home() {
  const { default: MDXContent } = await evaluate("<motion.p />", runtime);

  const components: MDXComponents = {
    motion: { p: () => <p>Hello world</p> },
  };

  return MDXContent({ components });
}
