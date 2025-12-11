import App from '../index.js';

const app = new App();
const PORT = 3000;

// In-memory data store
let users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' }
];

// Logging Middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// GET /users - List all users
app.get('/users', (req, res) => {
    res.json(users);
});

// GET /users/:id - Get user by ID
app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

// POST /users - Create a new user
// newgatejs automatically parses JSON, CSV, XML bodies into req.body
app.post('/users', (req, res) => {
    let newUser = req.body;

    // Handle CSV (array of users) - take the first one
    if (Array.isArray(newUser)) {
        newUser = newUser[0];
    }

    // Handle XML (nested object with array values)
    // Example: { user: { name: ['Eve'], email: ['eve@example.com'] } }
    if (newUser && newUser.user) {
        const xmlUser = newUser.user;
        newUser = {
            name: Array.isArray(xmlUser.name) ? xmlUser.name[0] : xmlUser.name,
            email: Array.isArray(xmlUser.email) ? xmlUser.email[0] : xmlUser.email
        };
    }

    // Basic validation
    if (!newUser || !newUser.name || !newUser.email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }

    // Assign simplified ID
    newUser.id = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
    users.push(newUser);

    res.status(201).json({
        message: 'User created successfully',
        user: newUser,
        receivedFormat: req.headers['content-type']
    });
});

// DELETE /users/:id - Delete a user
app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const initialLength = users.length;
    users = users.filter(u => u.id !== id);

    if (users.length < initialLength) {
        res.json({ message: `User ${id} deleted` });
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`REST API running on http://localhost:${PORT}`);
    console.log(`Try managing users with JSON, CSV, or XML requests!`);
});
