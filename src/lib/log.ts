import { curry } from "ramda";
import * as chalk from "chalk";

import { t_log } from "./types/index";

const log_fn: t_log = (fn, str) => {
	console.log(fn(str));
};

const logger = curry(log_fn);

export const success = logger(chalk.green);
export const warning = logger(chalk.yellow);
export const error = logger(chalk.red);