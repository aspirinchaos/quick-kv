import { CoreSchema } from 'meteor/core';
import SimpleSchema from 'simpl-schema';

import { ROLES } from '/imports/user/api/dictionaries';

const ProfileSchema = new SimpleSchema({
  name: {
    type: String,
    label: 'Name',
  },
});

const UserSchema = new SimpleSchema({
  services: {
    type: Object,
    optional: true,
    blackbox: true,
    label: 'Сервисные поля для аккаунта',
  },
  username: {
    type: String,
    label: 'Логин',
    optional: true,
  },
  profile: {
    type: ProfileSchema,
    label: 'Профиль',
    optional: true,
  },
  emails: {
    type: Array,
    optional: true,
  },
  'emails.$': {
    type: Object,
  },
  'emails.$.address': {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    label: 'E-mail',
  },
  'emails.$.verified': {
    type: Boolean,
  },
  role: {
    type: String,
    label: 'Тип пользователя',
    allowedValues: ROLES.keys(),
    optional: true,
  },
}).extend(CoreSchema);

export default UserSchema;
