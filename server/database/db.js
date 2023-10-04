import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@ac-dhkl4ym-shard-00-00.hhi2qyu.mongodb.net:27017,ac-dhkl4ym-shard-00-01.hhi2qyu.mongodb.net:27017,ac-dhkl4ym-shard-00-02.hhi2qyu.mongodb.net:27017/inshorts-clone?ssl=true&replicaSet=atlas-25f8cg-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("database connected succesfully");
  } catch (error) {
    console.log("Error while connecting with the database");
  }
};
export default Connection;
