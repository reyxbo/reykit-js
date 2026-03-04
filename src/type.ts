export type Key<T> = keyof T
export type Value<T> = T[keyof T]
export type KeyByValue<T, V> = {
    [K in keyof T]: T[K] extends V ? K : never
}[keyof T]
