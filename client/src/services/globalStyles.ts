import { css } from 'lit-element';

export const globalStyles = css`
  .hn-flex,
  html,
  body {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0px;
  }

  ::selection {
    background: var(--DarkShade);
  }

  ::-moz-selection {
    background: var(--DarkShade);
  }

  .dark-theme {
    --LightShade: var(--hnd1);
    --LightAccent: var(--hnd2);
    --Main: var(--hnd3);
    --DarkAccent: var(--hnd4);
    --DarkShade: var(--hnd5);
    --Text: var(--hnd5);
    color: var(--Text);
    background-color: var(--LightShade);
  }
`;

export const materialIconStyles = css`
  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px; /* Preferred icon size */
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;

    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;

    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;

    /* Support for IE. */
    font-feature-settings: 'liga';
  }
`;

export const fadeinAnimation = css`
  @keyframes fadein {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

export const flexHostStyles = css`
  :host {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0px;
  }
`;
