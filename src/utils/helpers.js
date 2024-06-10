export const getSign = (num) => {
  if (num === 0) {
    return "";
  }

  return num < 0 ? "-" : "+";
};
