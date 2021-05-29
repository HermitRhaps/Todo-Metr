import Sequelize from "sequelize";
const props = {
  sequelize: new Sequelize("Todosmetr_app", "SOME_USER", "SOME_PASS", {
    host: "127.0.0.1",
    dialect: "mysql",
    logging: false,
    define: {
      timestamps: false,
    },
  }),
  seqAuth: (sequelize) => {
    sequelize
      .authenticate()
      .then(() => console.log("Sequelize connection created!"))
      .catch((err) => console.log(err));
  },
  server: {
    port: 3001,
  },
};
export default props;
