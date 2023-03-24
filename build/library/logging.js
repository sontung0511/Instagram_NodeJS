"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
class logging {
}
exports.default = logging;
_a = logging;
/**public static info = (args: any) => input any */
logging.log = (args) => _a.info(args);
/**chalk.blue get string with color blue*/
/**new Date().toLocaleString(): get time in fact */
logging.info = (args) => console.log(chalk_1.default.blue(`[${new Date().toLocaleString()}]
    [INFO]`), typeof args === 'string' ? chalk_1.default.blueBright(args) : args);
logging.warn = (args) => console.log(chalk_1.default.yellow(`[${new Date().toLocaleString()}]
    [INFO]`), typeof args === 'string' ? chalk_1.default.yellowBright(args) : args);
logging.error = (args) => console.log(chalk_1.default.red(`[${new Date().toLocaleString()}]
    [INFO]`), typeof args === 'string' ? chalk_1.default.redBright(args) : args);
