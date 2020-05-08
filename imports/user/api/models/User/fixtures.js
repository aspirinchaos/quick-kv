import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import { ROLE_KEYS } from '/imports/user';
import Users from './collection';

Meteor.startup(() => {
  const username = 'kvsadmin';
  const password = '123456';

  if (Users.findOne({ username })) {
    return;
  }

  const _id = Accounts.createUser({
    username,
    password,
    profile: {
      name: 'Admin',
    },
  });

  Users.update(_id, { $set: { role: ROLE_KEYS.admin } });
});
