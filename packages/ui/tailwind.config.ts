import {
	type Config,
	config as sharedConfig,
} from "@repo-name/tailwind-config/config";

const config: Pick<Config, "presets"> = {
	presets: [sharedConfig],
};

export default config;
