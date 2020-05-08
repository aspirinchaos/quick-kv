import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';
import { FlowRouter } from 'meteor/kadira:flow-router';
import React from 'react';
import { mount } from 'react-mounter';

import { DEFAULT_TITLE } from './constants';
import LayoutReady from './router-init';

import EmptyLayout from '/imports/core/ui/layouts/EmptyLayout';
import NotFount from '/imports/core/ui/components/NotFound';

let MainLayout;

import('/imports/core/ui/layouts/MainLayout').then((layout) => {
  MainLayout = layout.default;
  LayoutReady.set(true);
});


class Route {
  constructor({ name, title, ...rest }) {
    check(name, String);
    this.name = name;
    this.title = title;

    this._define(rest);
  }

  path(...args) {
    return FlowRouter.path(this.name, ...args);
  }

  go(...args) {
    return FlowRouter.go(this.name, ...args);
  }

  isActive() {
    return this.name === FlowRouter.getRouteName();
  }

  setTitle = () => {
    if (!this.title) {
      return;
    }
    document.title = this.title;
  };

  unsetTitle = () => {
    document.title = DEFAULT_TITLE;
  };

  checkAuth(context, redirect) {
    if (Meteor.userId()) {
      redirect('home');
    }
  }

  _define({ path, Page, ...rest }) {
    check(path, String);
    check(Page, Match.Maybe(Function));
    FlowRouter.route(path, {
      name: this.name,
      action() {
        return mount(EmptyLayout, {
          content: (<Page />),
        });
      },
      triggersEnter: [this.checkAuth, this.setTitle],
      triggersExit: [this.unsetTitle],
      ...rest,
    });
  }
}

class AuthRoute extends Route {
  checkAuth(context, redirect) {
    if (!Meteor.userId()) {
      redirect('signin');
    }
  }

  _define({ path, Page, ...rest }) {
    check(path, String);
    check(Page, Match.OneOf(Object, Function));
    FlowRouter.route(path, {
      name: this.name,
      action() {
        if (!Meteor.userId()) {
          return mount(EmptyLayout, {
            content: (<NotFount />),
          });
        }
        return mount(MainLayout, {
          content: (<Page />),
        });
      },
      triggersEnter: [this.checkAuth, this.setTitle],
      triggersExit: [this.unsetTitle],
      ...rest,
    });
  }
}

export { Route, AuthRoute };
