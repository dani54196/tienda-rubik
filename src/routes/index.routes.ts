import { Router } from "express";
import usersRoutes from "./users.routes";

class IndexRoutes {
    public router: Router = Router();
  
    constructor() {
      this.config();
    }
  
    config(): void {
      this.router.use("/api/users", usersRoutes);
    }
  }
  
  const indexRoutes = new IndexRoutes();
  export default indexRoutes.router;
