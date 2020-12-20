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
exports.exitFullScreen = void 0;
const react_1 = __importStar(require("react"));
const enterAltScreenCommand = "\x1b[?1049h";
const leaveAltScreenCommand = "\x1b[?1049l";
const exitFullScreen = () => {
    process.stdout.write(leaveAltScreenCommand);
};
exports.exitFullScreen = exitFullScreen;
const FullScreen = ({ children }) => {
    react_1.useEffect(() => {
        // destroy alternate screen on unmount
        return exitFullScreen;
    }, []);
    // trigger alternate screen
    process.stdout.write(enterAltScreenCommand);
    return react_1.default.createElement(react_1.default.Fragment, null, children);
};
exports.default = FullScreen;
