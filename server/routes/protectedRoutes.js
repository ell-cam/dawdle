// protectedRoutes.js
import express from 'express';
import { authenticateToken } from '../middleware/authMiddleware';

const router = express.Router();

// Protected route example
router.get('/protected', authenticateToken, (req, res) => {
  // Access the authenticated user through req.user
  res.json({ message: 'This is a protected route', user: req.user });
});

export default router;