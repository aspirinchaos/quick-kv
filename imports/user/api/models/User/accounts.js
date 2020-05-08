import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(function () {
  const { MAIL_FROM, MAIL_URL } = Meteor.settings.private.email;
  process.env.MAIL_FROM = MAIL_FROM;
  process.env.MAIL_URL = MAIL_URL;
  Accounts.emailTemplates.from = MAIL_FROM;
});

Accounts.emailTemplates.siteName = 'Quick KVSystem';

Accounts.urls.enrollAccount = (token) => Meteor.absoluteUrl(`enroll/${token}`);

Accounts.emailTemplates.enrollAccount.subject = (user) => `Welcome to Quick KVSystem, ${user.profile.name}`;

Accounts.emailTemplates.enrollAccount.text = (user, url) => `${'You have been selected to be an adjudicator!'
+ ' To activate your account, simply click the link below:\n\n'}${url}`;
