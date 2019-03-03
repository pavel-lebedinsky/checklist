const express = require('express');
const checklists = require('../services/checklists');

const router = new express.Router();

/**
 * Get all checklists
 */
router.get('/', async (req, res, next) => {
  const options = {
  };

  try {
    const result = await checklists.getChecklists(options);
    res.status(result.status || 200).json(result.data);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: 'Server Error'
    });
  }
});

/**
 * Create new checklist
 */
router.post('/', async (req, res, next) => {
  const options = {
    body: req.body
  };

  try {
    const result = await checklists.createChecklist(options);
    res.status(result.status || 200).json(result.data);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: 'Server Error'
    });
  }
});

/**
 * Get checklist by id
 */
router.get('/:id', async (req, res, next) => {
  const options = {
    id: req.params['id']
  };

  try {
    const result = await checklists.getChecklist(options);
    res.status(result.status || 200).json(result.data);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: 'Server Error'
    });
  }
});

/**
 * Delete checklist
 */
router.delete('/:id', async (req, res, next) => {
  const options = {
    id: req.params['id']
  };

  try {
    const result = await checklists.deleteChecklist(options);
    res.status(result.status || 200).json(result.data);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: 'Server Error'
    });
  }
});

/**
 * Update checklist
 */
router.patch('/:id', async (req, res, next) => {
  const options = {
    body: req.body,
    id: req.params['id']
  };

  try {
    const result = await checklists.patchChecklist(options);
    res.status(result.status || 200).json(result.data);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: 'Server Error'
    });
  }
});

module.exports = router;
