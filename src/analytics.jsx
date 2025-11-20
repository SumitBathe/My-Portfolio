import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-81Z9466W6J"); 
};

export const trackPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

export const trackEvent = (action, label) => {
  ReactGA.event({
    category: "User",
    action,
    label,
  });
};
