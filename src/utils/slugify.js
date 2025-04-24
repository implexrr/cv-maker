export default function slugify(str) {
  return str
    .replace(/[^A-Za-z0-9]+/g, '')  // remove anything that isn't A–Z, a–z, or 0–9
    .toLowerCase();
}
