import { Meteor } from 'meteor/meteor';

import { ROLE_KEYS } from '/imports/user/api/constants';
import Schema from './schema';
import User from './document';
import { AdminPublisher, Publisher } from '/imports/core/api/publisher';

const Users = Meteor.users;

Object.assign(Users, {
  // Сделаем имитацию работы коллекции
  get schema() {
    return Schema;
  },
  userId() {
    return Meteor.userId();
  },
  /**
   * Получить документ текущего пользователя
   * передавать userId нужно при работе в методах
   * @param {string} _idUser
   * @return {User|undefined}
   */
  current(_idUser = this.userId()) {
    return _idUser && Meteor.users.findOne(_idUser);
  },
  methods: {},
  publications: {
    current: new Publisher('user.current'),
    judges: new AdminPublisher('judges.all'),
  },

  /**
   * Проверка пользователя на админа
   * @param _idUser
   * @return {boolean}
   */
  isAdmin(_idUser) {
    const user = this.current(_idUser) || {};
    return user.isAdmin;
  },
  /**
   * Проверка пользователя на судью
   * @param _idUser
   * @return {boolean}
   */
  isJudge(_idUser) {
    const user = this.current(_idUser) || {};
    return user.isJudge;
  },
  login(login, password) {
    return new Promise((resolve, reject) => {
      Meteor.loginWithPassword(login, password, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  },
  reset(token, password) {
    return new Promise((resolve, reject) => {
      Accounts.resetPassword(token, password, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  },
  logout() {
    return new Promise((resolve, reject) => {
      Meteor.logout((error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  },
  getJudges() {
    return Users.find({ role: ROLE_KEYS.judge }).fetch();
  },
});

Users.attachSchema(Schema);

Users._transform = (doc) => new User(doc);

export { Users as default };
