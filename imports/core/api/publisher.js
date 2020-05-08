import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';

import { Error } from './error';

const _publish = (publication) => {
  return function (...args) {
    // publishComposite can receive object instead function
    if (Match.test(publication, Object)) {
      return publication;
    }
    return publication.call(this, ...args);
  };
};

class Publisher {
  constructor(name) {
    check(name, String);
    this.name = name;
  }

  subscribe(...args) {
    if (Meteor.isServer) {
      throw new Error('subscribe-client-only');
    }
    return Meteor.subscribe(this.name, ...args);
  }

  publish(publication, composite = false) {
    if (!Meteor.isServer) {
      throw new Error('publish-server-only');
    }
    check(publication, Match.OneOf(Function, Object));
    check(composite, Boolean);
    const publish = composite ? Meteor.publishComposite : Meteor.publish;

    publish(this.name, _publish(publication));
  }
}

class AdminPublisher extends Publisher {
  publish(publication, composite) {
    const privatePublication = function (...args) {
      if (!Meteor.users.isAdmin(this.userId)) {
        throw new Error('access-denied');
      }
      return _publish(publication).call(this, ...args);
    };

    super.publish(privatePublication, composite);
  }
}

class JudgePublisher extends Publisher {
  publish(publication, composite) {
    const privatePublication = function (...args) {
      if (!Meteor.users.isJudge(this.userId)) {
        throw new Error('access-denied');
      }
      return _publish(publication).call(this, ...args);
    };

    super.publish(privatePublication, composite);
  }
}

export { Publisher, JudgePublisher, AdminPublisher };
