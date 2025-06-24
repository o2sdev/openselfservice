import boxen from 'boxen';

const message =
    `O2S collects anonymous telemetry data about general usage.\n` +
    `You can learn more here: https://www.openselfservice.com/docs/getting-started/telemetry\n` +
    `\n` +
    `You may opt-out by setting an environment variable: \`TELEMETRY_DISABLED=true\``;

console.log(
    boxen(message, {
        padding: 1,
        borderColor: `blue`,
        borderStyle: `double`,
    }),
);
