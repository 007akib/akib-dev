import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import fs from "fs";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API route for chat
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: "GEMINI_API_KEY is not configured on the server." });
      }

      // Load portfolio data to use as context
      const portfolioData = fs.readFileSync(path.join(process.cwd(), "src/data.json"), "utf8");

      const systemPrompt = `You are FRIDAY, an advanced AI portfolio assistant answering recruiter/visitor questions about Akib Ansari on his behalf, using ONLY the facts in this JSON. Be direct, results-oriented, and slightly futuristic/helpful in tone. If asked about something not covered here, say you don't have that detail rather than guessing. Always disclose that AM Enterprises growth-plan figures are illustrative projections, not live results, if that project comes up.

Portfolio JSON Data:
${portfolioData}`;

      const ai = new GoogleGenAI({ apiKey });
      
      const formattedMessages = messages.map((msg: any) => ({
        role: msg.role,
        parts: [{ text: msg.content }],
      }));

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: formattedMessages,
        config: {
          systemInstruction: systemPrompt,
        }
      });

      res.json({ reply: response.text });
    } catch (error) {
      console.error("Chat API Error:", error);
      res.status(500).json({ error: "Failed to generate response." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
