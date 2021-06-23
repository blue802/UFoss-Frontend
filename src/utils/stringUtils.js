export const truncateString = function (str, l = 100) {
  return str && str.length > l ? `${str.substring(0, l)}...` : str;
};
