import { Meteor } from 'meteor/meteor';

class Error extends Meteor.Error {
  constructor(error, reason, details, data) {
    super(error, reason, details);
    // todo@aspirin добавить логер ошибок
  }
}

export { Error };
