const express = require('express');
const bodyParser = require('body-parser');
const datetime = require('node-datetime');
const {
  verifyAccessToken,
  checkUserExists,
  insertUserToDatabase,
  insertUserSettingsToDatabase,
  checkUserPassword,
  insertSightingToDatabase,
  sendNotificationToReportAuthor,
  sendNotificationToLocalUsers,
  sendNotificationToPossibleOwners,
  insertMissingReportToDatabase,
  updatePetMissingStatus,
  updateMissingReportInDatabase,
  updateReportActiveStatus,
  retrieveLocationNotificationSettings,
  archiveMissingReportInDatabase,
  retrieveMissingReportsFromDatabase,
  retrieveReportsByPetId,
  retrieveSightingsFromDatabase,
  unlinkSightingsByReportId,
  retrieveMyReportSightingsFromDatabase,
  retrieveMissingReportsInAreaFromDatabase,
  retrieveSightingsInAreaFromDatabase,
  retrieveUserSavedSightings,
  saveSightingForUser,
  unsaveSightingForUser,
  updateLocationNotificationsSettingsInDatabase,
  checkUserLoginDetails,
  retrieveUser,
  updateUserDetails,
  changePasswordInDatabase,
  deleteAllUserDataFromDatabase,
} = require('./your-module-paths'); // Update with your actual module paths

import db from '../db/conn.mjs';

const app = express();
app.use(bodyParser.json());

app.post('/checkAccessToken', async (req, res) => {
    try {
      const result = await checkAccessToken(db, req);
      res.status(result.statusCode).json({ message: result.message });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  
  app.post('/insertUser', async (req, res) => {
    try {
      const result = await insertUser(db, req.body);
      res.status(result.statusCode).json({ message: result.message });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });