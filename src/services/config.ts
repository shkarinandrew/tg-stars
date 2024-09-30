import { initInitData } from '@tma.js/sdk-react';
import { findBotUsername } from '../utils';

export const DEFAULT_REQUEST_API = {
  user_id: initInitData()?.user?.id.toString() || '',
  bot_username: findBotUsername() || '',
};
