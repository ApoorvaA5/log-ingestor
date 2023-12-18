const Log = require('../models/logModel');

const createLog = async (req, res) => {
  try {
    const logData = req.body;
    const newLog = new Log(logData);
    await newLog.save();
    res.status(201).json(newLog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllLogs = async (req, res) => {
  try {
    const logs = await Log.find();
    res.status(200).json(logs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { createLog, getAllLogs };
