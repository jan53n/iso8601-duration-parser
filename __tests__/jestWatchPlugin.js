import { execSync } from 'child_process';

function build() {
    execSync("npm run build");
}

export default class MyWatchPlugin {
    getUsageInfo(globalConfig) {
        return {
            key: 'b',
            prompt: 're-build test parser',
        };
    }

    run() {
        build();
        return Promise.resolve(true);
    }
}