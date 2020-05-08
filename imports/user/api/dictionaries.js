import { Dictionary } from '/imports/core';
import { ROLE_KEYS } from './constants';

export const ROLES = new Dictionary({
  [ROLE_KEYS.admin]: {
    title: 'Администратор',
  },
  [ROLE_KEYS.judge]: {
    title: 'Судья',
  },
});
