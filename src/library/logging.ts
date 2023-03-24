import chalk from "chalk"

export default class logging{
    /**public static info = (args: any) => input any */
    public static log = (args: any) => this.info(args)
    /**chalk.blue get string with color blue*/
    /**new Date().toLocaleString(): get time in fact */
    public static info = (args: any) => console.log(chalk.blue(`[${new Date().toLocaleString()}]
    [INFO]`),typeof args === 'string'? chalk.blueBright(args):args);
    public static warn = (args: any) => console.log(chalk.yellow(`[${new Date().toLocaleString()}]
    [INFO]`),typeof args === 'string'? chalk.yellowBright(args):args);
    public static error = (args: any) => console.log(chalk.red(`[${new Date().toLocaleString()}]
    [INFO]`),typeof args === 'string'? chalk.redBright(args):args);
    /**if INFO == string will get chalk.color */  


}