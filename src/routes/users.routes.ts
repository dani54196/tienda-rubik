import { Router } from "express";
import { getUsers } from "../controllers/users.controller";

class UserRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get("/", getUsers);
  }
}

const userRoutes = new UserRoutes();
export default userRoutes.router;
