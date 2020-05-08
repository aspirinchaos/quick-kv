import { Document } from '/imports/core';
import { ROLES } from '/imports/user/api/dictionaries';
import { ROLE_KEYS } from '/imports/user/api/constants';

class User extends Document {
  get isAdmin() {
    return this.role === ROLE_KEYS.admin;
  }

  get isJudge() {
    return this.role === ROLE_KEYS.judge;
  }

  get roleTitle() {
    return ROLES[this.role].title;
  }
}

export default User;
