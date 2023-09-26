function serialize(json: any) {
  if (!json && !(typeof json === "object" && json !== null)) return "";
  const update = { ...json };
  Object.keys(json).map((key) => {
    if (json[key] === null || json[key] === undefined) delete update[key];
    return false;
  });
  const result = new URLSearchParams(json).toString();
  return result.replace(/\+/g, "%20");
}

export default serialize;
