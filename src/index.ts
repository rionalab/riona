import "dotenv/config";
import express from "express";
import chatRoutes from "./routes/chat.js";

const app = express();
const port = Number(process.env.APP_PORT ?? 3000);

app.use(express.json());
app.use("/api", chatRoutes);

app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});
