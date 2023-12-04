// AnalyticsPart.jsx

import React, { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";

const AnalyticsPart = ({ children }) => {
  useEffect(() => {
    // Track an event when the component mounts
    if (typeof window !== "undefined") {
      // Ensures that analytics tracking only happens on the client-side
      Analytics.track("ComponentMounted", {
        componentName: "AnalyticsPart",
      });
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <title>React.js</title>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
};

export default AnalyticsPart;
