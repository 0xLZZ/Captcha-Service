import { Logger } from "log4js";

declare global {
    interface Console {
        getLogger(category): Logger;
        [index: string]: (...args: any) => void;
    }
}

interface CustomLogger extends Logger {
    [index: string]: any;
}
