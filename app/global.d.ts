import * as React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'altcha-widget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        challengeurl?: string;
        test?: boolean | string;
        hidefooter?: boolean | string;
        hidelogo?: boolean | string;
        theme?: 'light' | 'dark';
      }, HTMLElement>;
    }
  }
}