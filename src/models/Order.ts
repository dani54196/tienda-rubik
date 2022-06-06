import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../db";
import UserModel from "./User";

interface OrdenModel
  extends Model<
    InferAttributes<OrdenModel>,
    InferCreationAttributes<OrdenModel>
  > {
  orden_id: number;
  user_id: number;
}

const OrdenModel = sequelize.define<OrdenModel>(
  "orders",
  {
    orden_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: 'users',
    }
  },
  {
    timestamps: true,
    createdAt: "createdAt",
    updatedAt: "updatedAt",
  }
);

OrdenModel.belongsToMany(UserModel,{through: 'user_id'});

export default OrdenModel;