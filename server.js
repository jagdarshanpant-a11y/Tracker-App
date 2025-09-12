const express = require("express");
const path = require("path");

const app = express();

// ✅ Render provides a dynamic port
const PORT = process.env.PORT || 3000;

// Serve static files from /public folder
app.use(express.static(path.join(__dirname, "public")));

// Root URL → open customer page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "customer.html"));
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
