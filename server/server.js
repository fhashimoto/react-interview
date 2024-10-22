const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Use body parser middleware
server.use(jsonServer.bodyParser);

// Middleware to ensure schema compliance
server.use((req, res, next) => {
  // Define your schema
  const schema = {
    title: "",
    description: "",
    completed: false,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    dueDate: Date.now(),
    priority: 0,
    tags: [],
    visual: {
      color: "",
      fontWeight: "",
    },
    id: "",
  };

  // Handle POST requests
  if (req.method === "POST") {
    const newItem = req.body || {};

    // Validation: Check for required fields
    if (!newItem.title) {
        return res.status(400).json({ error: "Title is required" });
      }
      if (!newItem.description) {
        return res.status(400).json({ error: "Description is required" });
      }

    // Fill in default values for missing fields
    for (const key in schema) {
      if (typeof newItem[key] === "undefined") {
        if (typeof schema[key] === "object" && !Array.isArray(schema[key])) {
          // If the key is an object, create an empty object
          newItem[key] = {};
          for (const subKey in schema[key]) {
            newItem[key][subKey] = schema[key][subKey];
          }
        } else {
          // Set the default value
          newItem[key] = schema[key];
        }
      }
    }
    newItem.createdAt = Date.now();
    newItem.updatedAt = Date.now();
    req.body = newItem; // Assign the modified body back to req.body
  }

  // Handle PUT requests
  if (req.method === "PUT") {
    const id = req.url.split("/").pop();
    const existingItem = router.db.get("todos").find({ id }).value();

    if (existingItem) {
      const updatedItem = {
        ...existingItem, // Start with existing item properties
        updatedAt: Date.now(), // Always update updatedAt
      };

      // Ensure req.body is defined before processing
      if (req.body) {
        // Merge only the fields present in the request body
        Object.entries(req.body).forEach(([key, value]) => {
          if (value !== undefined) {
            updatedItem[key] = value; // Update only if value is provided
          }
        });
      }

      // Do not overwrite createdAt
      updatedItem.createdAt = existingItem.createdAt;
      req.body = updatedItem; // Update the body with the merged object
    }
  }

  next(); // Call the next middleware
});

server.use(middlewares);
server.use(router);
server.listen(8089, () => {
  console.log("JSON Server is running on http://localhost:8089");
});
