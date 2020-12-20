"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const KeepAlive = () => {
    const [_, setCounter] = react_1.useState(1);
    react_1.useEffect(() => {
        const timer = setInterval(() => {
            if (_)
                setCounter((_) => _ + 1);
        }, 100);
        return () => {
            clearInterval(timer);
        };
    }, []);
    return null;
};
exports.default = KeepAlive;
