import { ReactNode, DependencyList } from 'react';
export { Listener, Listeners, renderReact, isReactNode, useOpen, useCount, useIndex, useRender, useIsMobile, useValueByMobile, useExec, createExternalState };
type Listener = () => void;
type Listeners = Set<Listener>;
/**
 * Render react note.
 * Note: `react` and `react-dom` packages version must be `19.2.4`.
 *
 * @param app - React note.
 * @param elementId - Render HTML element ID.
 */
declare function renderReact(app: ReactNode, elementId?: string): void;
/**
 * Is it a valid react node.
 *
 * @param value - Judgement value.
 * @returns Judgement result.
 */
declare function isReactNode(value: unknown): value is ReactNode;
/**
 * Hook of toggle.
 *
 * @param array - Array.
 * @param loop - Whether to loop count.
 * @returns Returns a stateful open value, and a function to automatic count it.
 */
declare function useOpen(defaultOpen?: boolean): [boolean, (open?: boolean) => void];
/**
 * Hook of count number.
 *
 * @param start - Start number.
 * @param step - Count step.
 * @param stop - Stop number.
 * @param loop - Whether to loop count.
 * @returns Returns a stateful count value, and a function to automatic count it.
 */
declare function useCount(start?: number, step?: number, stop?: number, loop?: boolean): [number, () => void];
/**
 * Hook of count array index.
 *
 * @param array - Array.
 * @param loop - Whether to loop count.
 * @returns Returns a stateful index value, and a function to automatic count it.
 */
declare function useIndex(array: any[], loop?: boolean): [number, () => void];
/**
 * Hook of force update render.
 */
declare function useRender(): () => void;
/**
 * Hook of whether is mobile client.
 *
 * @returns Judgement.
 */
declare function useIsMobile(): boolean;
/**
 * Hook of get value by client type.
 *
 * @param mobileValue - Value of mobile client.
 * @param value - Value of non mobile client.
 * @returns Value.
 */
declare function useValueByMobile<Value, MobileValue>(mobileValue: MobileValue, value: Value): Value | MobileValue;
/**
 * Hook of execute after rendering or effecting.
 *
 * @param func - Execute function.
 * @param deps - Effect dependency list.
 * @param args - Execute arguments.
 */
declare function useExec<T extends any[]>(func: (...args: T) => any | Promise<any>, deps?: DependencyList, args?: T): void;
/**
 * Get state value that can be updated externally.
 *
 * @param initialValue - Initial state value.
 * @returns Get state value hook function and set state value general function.
 */
declare function createExternalState<State>(initialValue: State): [() => State, (newValue: State) => void];
