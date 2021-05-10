import React from 'react';
import './src/styles/index.css';
import 'normalize.css';

import { AppProvider } from './src/AppProvider';

export function wrapRootElement({ element }) {
  return <AppProvider>{element}</AppProvider>;
}

export const onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  setPostBodyComponents([
    <div
      key={pluginOptions.key ? pluginOptions.key : 'portal'}
      id={pluginOptions.id ? pluginOptions.id : 'portal'}
    >
      {pluginOptions.text}
    </div>,
  ]);
};
