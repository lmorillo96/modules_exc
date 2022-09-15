import { suma, multiplicar } from "./modulos/controller.js";
import chalk from 'chalk';

const log = console.log;

const sum = suma(1, 2);
log(chalk.red(sum));

const mult = multiplicar(4, 5);
log(chalk.green(mult));
