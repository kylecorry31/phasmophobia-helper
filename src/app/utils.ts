export function containsAll<T>(main: T[], values: T[]): boolean {
    for (const value of values) {
      if (!main.includes(value)) {
        return false;
      }
    }
    return true;
  }

  export function containsNone<T>(main: T[], values: T[]): boolean {
    for (const value of values) {
      if (main.includes(value)) {
        return false;
      }
    }
    return true;
  }

  export function distinct<T>(items: T[]): T[] {
    const values = new Set<T>()
    for (const item of items) {
      values.add(item);
    }

    const list: T[] = [];

    for (const item of values){
      list.push(item);
    }

    return list;
  }

  export function removeAll<T>(main: T[], items: T[]): T[] {
    return main.filter((it) => !items.includes(it));
  }