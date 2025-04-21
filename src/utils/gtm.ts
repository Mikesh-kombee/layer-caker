interface Window {
  dataLayer: {
    push: (item: {
      event?: string;
      page?: string;
      eventCategory?: string;
      eventAction?: string;
      eventLabel?: string;
      eventValue?: number;
    }) => void;
  };
}

declare const window: Window;

export const GTM_ID = "GTM-MQF6LQTR";

export const pageview = (url: string) => {
  window.dataLayer.push({
    event: "pageview",
    page: url,
  });
};

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  window.dataLayer.push({
    event: "event",
    eventCategory: category,
    eventAction: action,
    eventLabel: label,
    eventValue: value,
  });
};
