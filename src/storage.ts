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
}
