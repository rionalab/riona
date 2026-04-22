import express from "express";
import { askQuestion } from "../services/ask.js";

const router = express.Router();

router.post("/chat", async (req, res) => {
   const { message } = req.body;
   if (!message) {
      return res.status(400).json({ error: "Message is required" });
   }
   try {
      const answer = await askQuestion(message);
      res.json({ answer });
   } catch (error) {
      console.error("Error processing message:", error);
      res.status(500).json({ error: "Failed to process the message" });
   }
});

export default router;
