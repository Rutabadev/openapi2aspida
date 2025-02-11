"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commands_1 = require("aspida/dist/commands");
var createConfig = function (config) {
    var _a;
    var openapi = config.openapi;
    return {
        input: openapi.inputFile,
        output: config.input,
        trailingSlash: config.trailingSlash,
        outputEachDir: config.outputEachDir,
        outputMode: config.outputMode,
        isYaml: (_a = openapi.yaml) !== null && _a !== void 0 ? _a : !openapi.inputFile.endsWith('.json')
    };
};
exports.default = (function (config) {
    return commands_1.getConfigs(config)
        .filter(function (c) { return c.openapi; })
        .map(function (c) { return createConfig(c); });
});
//# sourceMappingURL=getConfig.js.map