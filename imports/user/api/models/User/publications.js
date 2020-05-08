import Users from './collection';
import { ROLE_KEYS } from '/imports/user/api/constants';

Users.publications.judges.publish(function () {
  return Users.find({ role: ROLE_KEYS.judge });
});

Users.publications.current.publish(function () {
  return Users.find(this.userId, { fields: { role: 1 } });
});
