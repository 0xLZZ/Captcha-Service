import log4js from "log4js";
import pkg from "../../package.json";
import { CustomLogger } from "../../types/logger";


const methods: string[] = ["trace", "debug", "info", "warn", "error", "fatal"];
const pattern = (useColour = true): string => useColour ? "[%d]   %[[%p]   %x{p}[%c]%]   %m" : "[%d]   [%p]   %x{p}[%c]   %m"
const layout = {
    type: "pattern",
    pattern: pattern(true),
    tokens: {
        p(logEvent: any) {
            const level = logEvent.level.levelStr.toLowerCase();
            let amount = 0;

            if (level == "info") {
                amount += 1;
            }
            if (level == "warn") {
                amount += 1;
            }

            return " ".repeat(amount);
        }
    }
}

log4js.addLayout("json", function (config) {
    return function (logEvent) {
        return JSON.stringify(logEvent) + (config.separator || "");
    }
})

log4js.configure({
    appenders: {
        console: {
            type: "stdout",
            layout: layout
        },
        file: {
            type: "dateFile",
            filename: "logs/logs.log",
            pattern: "yyyy-MM-dd-hh",
            keepFileExt: true,
            compress: true,
            layout: {
                ...layout,
                pattern: pattern(false)
            },
        },
        json: {
            type: "dateFile",
            filename: "logs/logs.json",
            pattern: "yyyy-MM-dd-hh",
            keepFileExt: true,
            compress: true,
            layout: { type: "json" }
        }
    },
    categories: {
        default: {
            appenders: ["console", "file", "json"],
            level: process.env.NODE_ENV == "production" ? "trace" : "info",
            enableCallStack: true
        }
    }
});


methods.forEach((method: string) => {
    console[method] = (...args: any) => {
        const logger: CustomLogger = log4js.getLogger(pkg.name);
        logger[method].call(logger, ...args);
    }
});

console.getLogger = function getLogger(category) {
    if (typeof category == "function" || typeof category == "object") {
        category = category?.name;
    } else if (typeof category != "string") {
        category = this.caller?.name || pkg.name;
    }

    return log4js.getLogger(category)
};
