import { DOMAttributes } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // CustomElementsの型定義を行ってる
      ["blazor-counter"]: DOMAttributes<HTMLElement> & {
        title?: string;
        ["increment-amount"]?: number;
      };
    }
  }
}
