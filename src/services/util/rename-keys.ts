const processVal = (val: object): object => (
  (typeof val !== "object" || val === null)
    ? val
    : Array.isArray(val)
    ? val.map(processVal)
    : renameKeys(val)
);

const renameKeys = (obj: object): object =>
  Object.fromEntries(
    Object.entries(obj)
      .map(([key, val]) => [
        key.replace(/[A-Z]/g, (letter) => `${letter.toLowerCase()}`),
        processVal(val),
      ]),
  );

export default renameKeys;
