

const port = process.env.PORT

import app from "./src/app.js";

const PORT = port || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});