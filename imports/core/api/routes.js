import { FlowRouter } from 'meteor/kadira:flow-router';
import React from 'react';
import { mount } from 'react-mounter';

import { Route, AuthRoute } from '/imports/core/api/route';

import HomePage from '/imports/core/ui/pages/HomePage';
import SignInPage from '/imports/core/ui/pages/SignInPage';
import EnrollPage from '/imports/core/ui/pages/EnrollPage';
import EmptyLayout from '../ui/layouts/EmptyLayout';
import NotFound from '../ui/components/NotFound';

const SignInRoute = new Route({
  name: 'signin',
  path: '/signin',
  Page: SignInPage,
  title: 'QKVS - Sign in',
});

const EnrollRoute = new Route({
  name: 'enroll',
  path: '/enroll/:token',
  Page: EnrollPage,
  title: 'QKVS - Enroll',
});

FlowRouter.notFound = {
  action() {
    return mount(EmptyLayout, {
      content: (<NotFound />),
    });
  },
};

const HomeRoute = new AuthRoute({
  name: 'home',
  path: '/',
  Page: HomePage,
  title: 'QKVS - Home',
});

export {
  HomeRoute,
  SignInRoute,
  EnrollRoute,
};
