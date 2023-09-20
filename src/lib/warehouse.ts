// Used to store data outside of Thyseus
export class Warehouse {
  #id = 1;
  #map = new Map<number, unknown>();

  store(data: unknown) {
    this.#map.set(this.#id++, data);

    return this.#id - 1;
  }

  get<T>(id: number) {
    return this.#map.get(id) as T;
  }

  set(id: number, data: unknown) {
    this.#map.set(id, data);
  }

  delete(id: number) {
    this.#map.delete(id);
  }

  has(id: number) {
    return this.#map.has(id);
  }

  clear() {
    this.#map.clear();
  }

  get size() {
    return this.#map.size;
  }
}

export const warehouse = new Warehouse()
