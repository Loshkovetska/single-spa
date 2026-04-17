import React from "react";
import ReactDOMClient from "react-dom/client";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return (
      <div className="flex items-center gap-6 flex-col">
        <h1 className="text-heading-sm">Something happened</h1>
      </div>
    );
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
