// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1267849348524281896",
        serverId: "1011820688228765828",
        token: process.env.token1,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 5, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "idle",
        },
        selfMute: true,
    },
];
