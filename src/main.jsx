import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://01770194733efd33515a7866ef6481d3@o4508196369793024.ingest.de.sentry.io/4508196374052944",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
    Sentry.browserProfilingIntegration(),

    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "dark",
    }),
    
  ],
  // Tracing
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // Sample rate at 10%. Change to 100% in development.
  replaysOnErrorSampleRate: 1.0, // Sample 100% on errors.
});

const container = document.getElementById("root"); // Ensure the ID matches your HTML
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
