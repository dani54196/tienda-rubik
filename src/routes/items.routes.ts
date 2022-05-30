import { Router } from "express";
import { itemsController } from "../controllers/items.controllers";

class ItemRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get("/", itemsController.getItems);
    this.router.get("/:id", itemsController.getItem);
    this.router.post("/", itemsController.createItem);
    this.router.put("/:id", itemsController.updateItem);
    this.router.delete("/:id", itemsController.deleteItem);
  }
}

const itemRoutes = new ItemRoutes();
export default itemRoutes.router;
