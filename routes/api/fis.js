const express = require('express');
const router = express.Router();
const FIs = require('../../data/FIs');

// Gets All FIs
router.get('/', (req, res) => res.json(FIs));

// Get Single FI
router.get('/:clientId', (req, res) => {
  const found = FIs.find(FI => FI.clientId === parseInt(req.params.clientId));

  if (found) {
    res.json(found);
  } else {
    res.status(400).json({ msg: `No FI with the id of ${req.params.clientId}` });
  }
});

// Get Single FI, All Processes
router.get('/:clientId/processes', (req, res) => {
  const found = FIs.find(FI => FI.clientId === parseInt(req.params.clientId));

  if (found) {
    res.json(found.processes);
  } else {
    res.status(400).json({ msg: `No FI with the id of ${req.params.clientId}` });
  }
});

// Get Single FI, Single Process
router.get('/:clientId/processes/:processName', (req, res) => {
  const matchedFi = FIs.find(FI => FI.clientId === parseInt(req.params.clientId));
  if (matchedFi) {
    const matchedProcess = matchedFi.processes.find(process => process.name = req.params.processName)
    if(matchedProcess) res.json(matchedProcess)
    else {
      res.status(400).json({ msg: `FI ${req.params.clientId} does not contain a process ${req.params.processName}` });
    }
  } else {
    res.status(400).json({ msg: `No FI with the id of ${req.params.clientId}` });
  }
});

// Get Single FI, Single Process, All Variables
router.get('/:clientId/processes/:processName/variables', (req, res) => {
  const matchedFi = FIs.find(FI => FI.clientId === parseInt(req.params.clientId));
  if (matchedFi) {
    const matchedProcess = matchedFi.processes.find(process => process.name = req.params.processName)
    if(matchedProcess) res.json(matchedProcess.variables)
    else {
      res.status(400).json({ msg: `FI ${req.params.clientId} does not contain a process ${req.params.processName}` });
    }
  } else {
    res.status(400).json({ msg: `No FI with the id of ${req.params.clientId}` });
  }
});


// Get Single FI, Single Process, Single Variable
router.get('/:clientId/processes/:processName/variables/:key', (req, res) => {
  const matchedFi = FIs.find(FI => FI.clientId === parseInt(req.params.clientId));
  if (matchedFi) {
    const matchedProcess = matchedFi.processes.find(process => process.name === req.params.processName)
    if(matchedProcess) {
      const matchedVariable = matchedProcess.variables.find(variable => variable.key === req.params.key)
      if(matchedVariable){
        res.json(matchedVariable)
      }
      else {
        res.status(400).json({ msg: `FI ${req.params.clientId} with process ${req.params.processName} does not have a variable key ${req.params.key}` });
      }
    }
    else {
      res.status(400).json({ msg: `FI ${req.params.clientId} does not contain a process ${req.params.processName}` });
    }
  } else {
    res.status(400).json({ msg: `No FI with the id of ${req.params.clientId}` });
  }
});

// Get Single FI, Single Process, Single Variable, value only
router.get('/:clientId/processes/:processName/variables/:key/value', (req, res) => {
  const matchedFi = FIs.find(FI => FI.clientId === parseInt(req.params.clientId));
  if (matchedFi) {
    const matchedProcess = matchedFi.processes.find(process => process.name === req.params.processName)
    if(matchedProcess) {
      const matchedVariable = matchedProcess.variables.find(variable => variable.key === req.params.key)
      if(matchedVariable){
        res.json(matchedVariable.value)
      }
      else {
        res.status(400).json({ msg: `FI ${req.params.clientId} with process ${req.params.processName} does not have a variable key ${req.params.key}` });
      }
    }
    else {
      res.status(400).json({ msg: `FI ${req.params.clientId} does not contain a process ${req.params.processName}` });
    }
  } else {
    res.status(400).json({ msg: `No FI with the id of ${req.params.clientId}` });
  }
});

module.exports = router;
