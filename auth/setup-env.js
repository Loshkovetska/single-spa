// src/setup-env.js
const { TextEncoder, TextDecoder } = require("node:util");

// Existing TextEncoder fix
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
