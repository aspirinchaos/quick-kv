import { Accounts } from 'meteor/accounts-base';
import { check } from 'meteor/check';

import { AdminMethoder } from '/imports/core';

import { ROLE_KEYS } from '/imports/user/api/constants';
import Users from './collection';

Users.methods.judgeInsert = AdminMethoder({
  name: `${ROLE_KEYS.judge}.insert`,
  validate({ name, email }) {
    check(name, String);
    check(email, String);
  },
  run({ name, email }) {
    if (Meteor.isServer) {
      const id = Accounts.createUser({ email, profile: { name } });
      Users.update(id, {
        $set: {
          role: ROLE_KEYS.judge,
        },
      });
      Accounts.sendEnrollmentEmail(id);
    }
  },
});

Users.methods.judgeRemove = AdminMethoder({
  name: `${ROLE_KEYS.judge}.remove`,
  validate(_id) {
    check(_id, String);
  },
  run(_id) {
    Users.remove(_id);
  },
});
