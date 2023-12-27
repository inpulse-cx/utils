function removeAccents(string: string) {
  if (!string || typeof string !== "string") return "";
  return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export default removeAccents;
