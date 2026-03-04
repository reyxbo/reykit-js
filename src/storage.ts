import { Key, Value, KeyByValue } from './type'

/**
 * Manage local storage data.
 */
export default class Storager<Data extends Record<string, any>> {

    /**
     * Build instance.
     * 
     * @param name - Local storage key.
     */
    constructor(public name: string) {

        // Build.
        if (!localStorage.getItem(name)) {
            localStorage.setItem(name, '{}')
        }
    }

    /**
     * Get all data.
     * 
     * @returns All data.
     */
    get data(): Data {

        // Get.
        const dataString = localStorage.getItem(this.name)!
        const data = JSON.parse(dataString)

        return data
    }

    /**
     * Get all keys.
     * 
     * @returns All keys.
     */
    get keys(): Key<Data>[] {

        // Get.
        const keys = Object.keys(this.data)

        return keys
    }

    /**
     * Get all values.
     * 
     * @returns All values.
     */
    get values(): Value<Data>[] {

        // Get.
        const values = Object.values(this.data)

        return values
    }

    /**
     * Update data.
     * 
     * @param data - New data.
     */
    update(data: Partial<Data>) {

        // Update.
        const newData = Object.assign(this.data, data)
        const newDataString = JSON.stringify(newData)
        localStorage.setItem(this.name, newDataString)
    }

    /**
     * Clear data.
     */
    clear() {

        // Clear.
        localStorage.setItem(this.name, '{}')
    }

    /**
     * Get a item value.
     * 
     * @param key - Item key.
     * @returns Item value.
     */
    get<K extends keyof Data>(key: K): Data[K] {

        // Get.
        const value = this.data[key]

        return value
    }

    /**
     * Set a item.
     * 
     * @param key - Item key.
     * @param value - Item value.
     */
    set<K extends keyof Data>(key: K, value: Data[K]) {

        // Update.
        const data = { [key]: value } as unknown as Partial<Data>
        this.update(data)
    }

    /**
     * Delete a item.
     * 
     * @param key - Item key.
     */
    del<K extends keyof Data>(key: K) {

        // Delete.
        const data = this.data
        delete data[key]
        const newDataString = JSON.stringify(data)
        localStorage.setItem(this.name, newDataString)
    }

    /**
     * Toggle boolean value.
     * 
     * @param key - Item key.
     */
    toggle<K extends KeyByValue<Data, boolean>>(key: K) {

        // Parameter.
        const data = this.data
        if (!(key in data)) throw new Error(`Key "${key as string}" not found`)
        const value = data[key]
        if (typeof value !== 'boolean') throw new Error(`The value type of key "${key as string}" is not boolean`)

        // Toggle.
        this.set(key, !value as Data[typeof key])
    }
}
