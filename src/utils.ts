export const debounce = <Params extends unknown[]>(
    func: (...args: Params) => unknown,
    defaultDelay = 500
): ((delay?: number, ...args: Params) => void) => {
    let timer: ReturnType<typeof setTimeout>;

    return (delay = defaultDelay, ...args: Params) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(...args);
        }, delay);
    };
};
