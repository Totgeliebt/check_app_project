export const removeWhiteSpaces = (string) => {
  return string.split(" ").join("");
};

export const addAt = (string) => {
  if (!string.includes("@")) {
    return string.replace(string, "@" + string);
  } else return string;
};
