const dateOptions = {
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
};
export const formatDate = (date) => new Date(date).toLocaleString("en-US", dateOptions);
