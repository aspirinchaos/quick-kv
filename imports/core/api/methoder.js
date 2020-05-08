
import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/validated-method';

import { Error } from './error';

const noop = function () {
};

const Methoder = (options) => {
  const method = new ValidatedMethod(options);
  const { callPromise } = method;
  const call = callPromise.bind(method);
  call.method = method;
  return call;
};

const PrivateMethoder = function (options) {
  const { validate = noop } = options;
  options.validate = function (...args) {
    if (!this.userId) {
      throw new Error('access-denied');
    }
    return validate.call(this, ...args);
  };
  return Methoder(options);
};

const JudgeMethoder = function (options) {
  const { validate = noop } = options;
  options.validate = function (...args) {
    if (!Meteor.users.isJudge(this.userId)) {
      throw new Error('access-denied');
    }
    return validate.call(this, ...args);
  };
  return Methoder(options);
};

const AdminMethoder = function (options) {
  const { validate = noop } = options;
  options.validate = function (...args) {
    if (!Meteor.users.isAdmin(this.userId)) {
      throw new Error('access-denied');
    }
    return validate.call(this, ...args);
  };
  return Methoder(options);
};

export { Methoder, PrivateMethoder, JudgeMethoder, AdminMethoder };
