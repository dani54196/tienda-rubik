import { Router } from "express";
import { itemsController } from "../controllers/items.controllers";

class ItemRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get("/", itemsController.getItems);
  }
}

const itemRoutes = new ItemRoutes();
export default itemRoutes.router;