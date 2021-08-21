Function.prototype.bind = (context, ...rest) => {
    return (...args) => {
        return this.apply(context, [...rest, ...args]);
    }
}