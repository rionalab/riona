import test from "node:test";
import "dotenv/config";
import assert from "node:assert";
import axios from "axios";

test("Chat endpoint should return a valid response", async () => {
   const response = await axios.post(process.env.APP_API_URL + "/chat", {
      message: "Apa itu antasena?",
   });

   console.log(response.data);
   assert.strictEqual(response.status, 200, "Response status should be 200");

   assert.ok(response.data.answer, "Response should contain an answer");
});
