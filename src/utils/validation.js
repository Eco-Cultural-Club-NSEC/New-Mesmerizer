export const validation = (data) => {
  if (typeof data === "string" || data instanceof String) {
    let info = data.trim();
    // console.log(data);
    if (info === "") return false;
    else return true;
  } else {
    console.error("Invalid data type. Expected a string.");
    return false;
  }
};
