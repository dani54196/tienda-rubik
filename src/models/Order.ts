import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../db";

interface OrdenModel
  extends Model<
    InferAttributes<OrdenModel>,
    InferCreationAttributes<OrdenModel>
  > {
  orden_id: number;
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
  },
  {
    timestamps: true,
    createdAt: "createdAt",
    updatedAt: "updatedAt",
  }
);

export default OrdenModel;
