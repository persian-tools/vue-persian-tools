export * from "../directives/helpers/utils";

// for vue 2 plugins
import Vue, { PluginFunction, VueConstructor } from "vue";

export interface IPersianToolsVuePluginOptions {
    components: boolean;
    directives: boolean;
}

declare const tools: VueConstructor<Vue> & { install: PluginFunction<IPluginOptions> };
export default tools;
