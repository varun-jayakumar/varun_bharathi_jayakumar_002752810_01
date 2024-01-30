import { sequelize } from "../config/database.js";

export const health = async (req, res) => {
  if (
    req.headers["content-type"] ||
    (req.body && Object.keys(req.body).length !== 0)
  ) {
    res.status(400).end();
  } else {
    try {
      await sequelize.authenticate();
      res.status(200);
      res.set("cache-control", "no-cache").end();
    } catch {
      res.status(503);
      res.set("cache-control", "no-cache").end();
    }
  }
};
