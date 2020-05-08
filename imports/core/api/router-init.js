import { FlowRouter } from 'meteor/kadira:flow-router';
import { ReactiveVar } from 'meteor/reactive-var';
import { Tracker } from 'meteor/tracker';

import { Users } from '/imports/user';

FlowRouter.wait();

const sub = Users.publications.current.subscribe();
const LayoutReady = new ReactiveVar(false);

Tracker.autorun(() => {
  if (LayoutReady.get() && sub.ready() && !FlowRouter._initialized) {
    FlowRouter.initialize();
  }
});

export default LayoutReady;
