export * from "../directives/helpers/utils";

// for vue 2 plugins
import Vue, { PluginFunction, VueConstructor } from "vue";

declare const tools: VueConstructor<vue> & { install: PluginFunction<any> };
export default tools;
