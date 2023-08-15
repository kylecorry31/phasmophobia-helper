export function containsAll(main, values) {
  return main.every((value) => values.includes(value));
}

export function containsNone(main, values) {
  return values.length === 0 || main.every((value) => !values.includes(value));
}

export function distinct(items) {
  return [...new Set(items)];
}

export function removeAll(main, items) {
  return main.filter((it) => !items.includes(it));
}