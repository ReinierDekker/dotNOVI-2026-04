import express from 'express';
import { healthCheck } from '../db.js';

const router = express.Router();

/**
 * GET /about
 * About endpoint for showing the About us page
 */
router.get('/', async (req, res) => {
  try {

  } catch (error) {
    res.status(503).json({
      status: 'unhealthy',
      timestamp: new Date().toISOString(),
      error: error.message,
    });
  }
});

export default router;
