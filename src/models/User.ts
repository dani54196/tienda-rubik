import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../db";

interface UserModel
  extends Model<
    InferAttributes<UserModel>,
    InferCreationAttributes<UserModel>
  > {
  user_id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  address: string;
  phone: number;
}

const UserModel = sequelize.define<UserModel>("users", {
  user_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  },
  name: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  email: {
    type: new DataTypes.STRING(128),
    allowNull: true,
    unique: true,
  },
  password: {
    type: new DataTypes.STRING(128),
    allowNull: true,
  },
  role: {
    type: new DataTypes.STRING(32),
  },
  address: {
    type: new DataTypes.STRING(128),
  },
  phone: {
    type: new DataTypes.STRING(64),
  },
},{
  timestamps: true,
  createdAt: "createdAt",
  updatedAt: "updatedAt",
});

export default UserModel;
