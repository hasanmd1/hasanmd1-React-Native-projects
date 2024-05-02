import express from 'express';
import SettingsControllers from '../../controllers/user/SettingsControllers.mjs';


const settingsHandler = express.Router();

settingsHandler.get(
  '/',
  SettingsControllers.getSettings);

settingsHandler.post(
  '/',
  SettingsControllers.postSettings);

settingsHandler.put(
  '/',
  SettingsControllers.putSettings);

export default settingsHandler;