import { combineReducers } from '@reduxjs/toolkit';

import comic from './comics/comicSlice';
import characters from './characters/reducer';

export default combineReducers({
  comic,
  characters,
});
