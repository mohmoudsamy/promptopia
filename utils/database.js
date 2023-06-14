import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("Already connected");
    return;
  }

  try {
    await mongoose.connect(
      "mongodb+srv://mahmoudsamy15202:nextjspromp@promp.xxmuzcd.mongodb.net/?retryWrites=true&w=majority",
      {
        dbName: "share_prompt",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    isConnected = true;

    console.log("Connected");
  } catch (error) {
    console.log(error);
  }
};
