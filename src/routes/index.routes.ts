import { Router } from "express";

import { verifyToken } from "../middlewares/verifyToken";
import usersRoutes from "./users.routes";
import auth from "./auth.routes";
import itemsRoutes from "./items.routes";

class IndexRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get("/", (req, res) =>
      res.json({ message: "Welcome to the API" })
    );
    this.router.use("/api/users", usersRoutes);
    this.router.use("/api/auth", auth);

    this.router.use("/api/productos", verifyToken,(req, res) =>
      res.json({ message: "pagina protegida" })
    );

    this.router.use("/api/items", itemsRoutes);

  }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;
