import Types from "sequelize";
import props from "../settings/props.js";
const { DataTypes } = Types;
const Todos = props.sequelize.define(
  "todo_list",
  {
    todo_id: { type: DataTypes.INTEGER, primaryKey: true },
    todo_title: DataTypes.STRING,
    todo_body: DataTypes.STRING,
    todo_status: DataTypes.BOOLEAN,
  },
  {
    freezeTableName: true,
  }
);
export default Todos;
