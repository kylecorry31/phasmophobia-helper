export function containsAll(main, values) {
    for (const value of values) {
      if (!main.includes(value)) {
        return false;
      }
    }
    return true;
  }

  export function containsNone(main, values) {
    for (const value of values) {
      if (main.includes(value)) {
        return false;
      }
    }
    return true;
  }

  export function distinct(items) {
    const values = new Set()
    for (const item of items) {
      values.add(item);
    }

    const list = [];

    for (const item of values){
      list.push(item);
    }

    return list;
  }

  export function removeAll(main, items) {
    return main.filter((it) => !items.includes(it));
  }