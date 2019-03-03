const express = require('express');
const user = require('../services/user');

const router = new express.Router();

/**
 * Create the new user
 */
router.post('/', async (req, res, next) => {
  const options = {
    body: req.body
  };

  try {
    const result = await user.createUser(options);
    res.status(result.status || 200).json(result.data);
  } catch (err) {
    next(err);
  }
});

/**
 * Logs user into the system
 */
router.post('/login', async (req, res, next) => {
  const options = {
    body: req.body
  };

  try {
    const result = await user.loginUser(options);
    res.status(result.status || 200).json(result.data);
  } catch (err) {
    next(err);
  }
});

/**
 * Logs out current logged in user
 */
router.get('/logout', async (req, res, next) => {
  const options = {
  };

  try {
    const result = await user.logoutUser(options);
    res.status(result.status || 200).json(result.data);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: 'Server Error'
    });
  }
});

/**
 * Get user by user name
 */
router.get('/:id', async (req, res, next) => {
  const options = {
    id: req.params['id']
  };

  try {
    const result = await user.getUserByName(options);
    res.status(result.status || 200).json(result.data);
  } catch (err) {
    next(err);
  }
});

/**
 * Update user
 */
router.patch('/:id', async (req, res, next) => {
  const options = {
    body: req.body,
    id: req.params['id']
  };

  try {
    const result = await user.updateUser(options);
    res.status(result.status || 200).json(result.data);
  } catch (err) {
    next(err);
  }
});

/**
 * Delete user
 */
router.delete('/:id', async (req, res, next) => {
  const options = {
    id: req.params['id']
  };

  try {
    const result = await user.deleteUser(options);
    res.status(result.status || 200).json(result.data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
