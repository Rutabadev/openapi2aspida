import { OpenAPI } from 'openapi-types';
import { AspidaConfig } from 'aspida/dist/commands';
export declare type Config = Pick<AspidaConfig, 'outputEachDir' | 'outputMode' | 'trailingSlash'> & {
    input: string | OpenAPI.Document;
    output: string;
    isYaml: boolean;
};
export declare type ConfigFile = AspidaConfig & {
    openapi?: {
        inputFile: string;
        yaml?: boolean;
    };
};
declare type PartialConfig = Partial<ConfigFile> | Partial<ConfigFile>[];
declare const _default: (config?: string | PartialConfig | undefined) => Config[];
export default _default;
//# sourceMappingURL=getConfig.d.ts.map