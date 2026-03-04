import { Key, Value, KeyByValue } from './type';
/**
 * Manage local storage data.
 */
export default class Storager<Data extends Record<string, any>> {
    name: string;
    /**
     * Build instance.
     *
     * @param name - Local storage key.
     */
    constructor(name: string);
    /**
     * Get all data.
     *
     * @returns All data.
     */
    get data(): Data;
    /**
     * Get all keys.
     *
     * @returns All keys.
     */
    get keys(): Key<Data>[];
    /**
     * Get all values.
     *
     * @returns All values.
     */
    get values(): Value<Data>[];
    /**
     * Update data.
     *
     * @param data - New data.
     */
    update(data: Partial<Data>): void;
    /**
     * Clear data.
     */
    clear(): void;
    /**
     * Get a item value.
     *
     * @param key - Item key.
     * @returns Item value.
     */
    get<K extends keyof Data>(key: K): Data[K];
    /**
     * Set a item.
     *
     * @param key - Item key.
     * @param value - Item value.
     */
    set<K extends keyof Data>(key: K, value: Data[K]): void;
    /**
     * Delete a item.
     *
     * @param key - Item key.
     */
    del<K extends keyof Data>(key: K): void;
    /**
     * Toggle boolean value.
     *
     * @param key - Item key.
     */
    toggle<K extends KeyByValue<Data, boolean>>(key: K): void;
}
