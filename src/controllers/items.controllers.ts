import {Request, Response} from 'express';
import Item from '../models/Item';

class ItemsController{
    public async getItems(req:Request, res:Response):Promise<Response>{
        try{
            const items = await Item.findAll();
            return res.status(200).json(items);
        }catch(err){
            return res.status(500).json({
                error:err
            });
        }
    }
}

export const itemsController = new ItemsController();