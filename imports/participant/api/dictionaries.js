import { Dictionary } from '/imports/core';
import { GROUP_KEYS } from './constants';

export const GROUPS = new Dictionary({
  [GROUP_KEYS.normal]: {
    title: 'Group 1',
  },
  [GROUP_KEYS.semi]: {
    title: 'Group 2',
  },
  [GROUP_KEYS.weak]: {
    title: 'Group 3',
  },
});
