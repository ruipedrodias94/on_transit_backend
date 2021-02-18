import { connect } from "./config/mongo";
import { UserModel } from "./models/User";

const main = async () => {
  connect();

  const { _id: id } = await UserModel.create({
    name: "JohnDoe",
    jobs: ["Cleaner"],
  });
};

main();
