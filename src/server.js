import app from "./configs/app.js";
import { config } from "./configs/env.js";

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
