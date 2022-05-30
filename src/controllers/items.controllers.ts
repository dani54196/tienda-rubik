import { Request, Response } from "express";
import Item from "../models/Item";

class ItemsController {
  public async getItems(req: Request, res: Response): Promise<Response> {
    try {
      const items = await Item.findAll();
      return res.status(200).json(items);
    } catch (err) {
      return res.status(500).json({
        error: err,
      });
    }
  }

  public async getItem(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      const item = await Item.findByPk(id);
      return res.status(200).json(item);
    } catch (err) {
      return res.status(500).json({
        error: err,
      });
    }
  }

  public async createItem(req: Request, res: Response): Promise<Response> {
    try {
      const item = await Item.create(req.body);
      return res.status(201).json(item);
    } catch (err) {
      return res.status(500).json({
        error: err,
      });
    }
  }

  public async updateItem(req: Request, res: Response): Promise<Response> {
    try {
      const item = await Item.update(req.body, {
        where: {
          item_id: req.params.id,
        },
      });

      return res.status(200).json(item);
    } catch (err) {
      return res.status(500).json({
        error: err,
      });
    }
  }

  public async deleteItem(req: Request, res: Response): Promise<Response> {
    try {
      const item = await Item.destroy({
        where: {
          item_id: req.params.id,
        },
      });
      return res.status(200).json(item);
    } catch (err) {
      return res.status(500).json({
        error: err,
      });
    }
  }
}

export const itemsController = new ItemsController();
