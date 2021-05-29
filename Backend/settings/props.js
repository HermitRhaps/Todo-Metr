import Sequelize from "sequelize";
const props = {
  sequelize: new Sequelize("Todosmetr_app", "dev", "eRs!19aBBn", {
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
