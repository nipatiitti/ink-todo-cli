"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const ink_1 = require("ink");
const usePrevious = (value) => {
    const ref = react_1.useRef(value);
    react_1.useEffect(() => {
        ref.current = value;
    });
    return ref.current;
};
const Scrollbar = ({ height, width, children, focus = true, onChange, current, childrenHeight, }) => {
    const [limit, setLimit] = react_1.useState(Math.floor(height / childrenHeight));
    // const [change, setChange] = useState(0);
    const [viewport, setViewport] = react_1.useState([current, current + limit]);
    const prevCurrent = usePrevious(current);
    react_1.useEffect(() => {
        setViewport(getViewPort(0));
    }, []);
    react_1.useEffect(() => {
        setViewport(getViewPort(current - prevCurrent));
    }, [current]);
    react_1.useEffect(() => {
        setLimit(Math.floor(height / childrenHeight));
    }, [height]);
    const getViewPort = (change) => {
        // setChange(change);
        const [oldStart, oldEnd] = viewport;
        // Moving down
        if (change > 0) {
            const newStart = current >= oldEnd ? oldStart + change : oldStart;
            const newEnd = newStart + limit;
            return [newStart, newEnd];
        }
        // Moving up
        if (change < 0) {
            const newEnd = current < oldStart ? oldEnd + change : oldEnd;
            const newStart = newEnd - limit;
            return [newStart, newEnd];
        }
        return viewport;
    };
    ink_1.useInput((_, key) => {
        if (focus) {
            if (!current && current !== 0) {
                onChange(0);
                return;
            }
            if (key.downArrow) {
                onChange(Math.min(current + 1, children.length - 1));
            }
            if (key.upArrow) {
                onChange(Math.max(current - 1, 0));
            }
        }
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ink_1.Box, { flexDirection: "column", alignItems: "flex-start", height: Math.floor(height / childrenHeight) * childrenHeight, width: width !== null && width !== void 0 ? width : "90%" }, children.slice(...viewport))));
};
exports.default = Scrollbar;
