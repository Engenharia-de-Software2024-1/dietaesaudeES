const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.transformer.unstable_allowRequireContext = true;

module.exports = defaultConfig;
