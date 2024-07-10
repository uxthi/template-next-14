const nodeEnv = (process.env.NODE_ENV ?? "local").toLowerCase();

const isProduction = () => ["production", "prod"].includes(nodeEnv);

export const environment = {
  isProduction,
  isDevelopment: () => ["development", "dev", "staging"].includes(nodeEnv),
  isLocal: () => ["local"].includes(nodeEnv),
  baseUrlApi: "" || "",
};
