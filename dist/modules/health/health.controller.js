"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.health = void 0;
const health_service_1 = require("./health.service");
const health = (_, res) => {
    res.json((0, health_service_1.getHealth)());
};
exports.health = health;
