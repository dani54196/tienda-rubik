import { Router } from "express";
import usersRoutes from "./users.routes";
import auth from "./auth.routes"

class IndexRoutes {
    public router: Router = Router();
  
    constructor() {
      this.config();
    }
  
    config(): void {
      this.router.get("/", (req, res) => res.json({message: "Welcome to the API"}));
      this.router.use("/api/users", usersRoutes);
      this.router.use("/api/auth", auth);
    }
  }
  
  const indexRoutes = new IndexRoutes();
  export default indexRoutes.router;
