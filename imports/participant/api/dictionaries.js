import { Dictionary } from '/imports/core';
import { GROUP_KEYS } from './constants';

export const GROUPS = new Dictionary({
  [GROUP_KEYS.normal]: {
    title: 'Normal',
  },
  [GROUP_KEYS.semi]: {
    title: 'Semi normal',
  },
  [GROUP_KEYS.weak]: {
    title: 'Weak',
  },
});
