/**
 * Manage local storage data.
 */
export default class Storager<Data extends Record<string, any>> {
    name: string;
    /**
     * Build instance.
     *
     * Parameters
     * ----------
     * @param name Local storage key.
     */
    constructor(name: string);
    /**
     * Get all data.
     *
     * Returns
     * -------
     * @returns All data.
     */
    get data(): Data;
    /**
     * Update data.
     *
     * Parameters
     * ----------
     * @param data New data.
     */
    update(data: Partial<Data>): void;
    /**
     * Clear data.
     */
    clear(): void;
    /**
     * Get a item value.
     *
     * Parameters
     * ----------
     * @param key Item key.
     *
     * Returns
     * -------
     * @returns Item value.
     */
    get<K extends keyof Data>(key: K): Data[K];
    /**
     * Set a item.
     *
     * Parameters
     * ----------
     * @param key Item key.
     * @param value Item value.
     */
    set<K extends keyof Data>(key: K, value: Data[K]): void;
    /**
     * Delete a item.
     *
     * Parameters
     * ----------
     * @param key Item key.
     */
    del<K extends keyof Data>(key: K): void;
}
