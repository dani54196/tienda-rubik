import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../db";

interface ItemModel
  extends Model<
    InferAttributes<ItemModel>,
    InferCreationAttributes<ItemModel>
  > {
  item_id: number;
  name: string;
  description: string;
  image_url: string;
  quantity: number;
  price: number;
  magnet: boolean;
  size: string;
  category: string;
}

const ItemModel = sequelize.define<ItemModel>(
  "items", 
  {
    item_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    description: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
    image_url: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
    quantity: {
      type: new DataTypes.INTEGER(),
      allowNull: false,
    },
    price: {
      type: new DataTypes.INTEGER(),
      allowNull: false,
    },
    magnet: {
      type: new DataTypes.BOOLEAN(),
      allowNull: true,
    },
    size: {
      type: new DataTypes.STRING(32),
      allowNull: true,
    },
    category: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
  },{
    timestamps: false,
  }
);

export default ItemModel;
