import { Mongo } from 'meteor/mongo';
import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';
import CoreSchema from './core-schema';

checkNpmVersions({ 'simpl-schema': '1.7' }, 'core');

/**
 * @module meteor/core
 */

/**
 * Класс для всех документов
 */
class Document {
  /**
   * Класс для наследвания документов
   * @param doc {Object} - документ из монго
   */
  constructor(doc) {
    Object.assign(this, doc);
  }
}

/**
 * Класс для всех коллекций
 */
class Collection extends Mongo.Collection {
  /**
   * Хранение схемы
   * @property {SimpleSchema}
   * @private
   */
  schema = null;

  /**
   * Хранение класса документов
   * @property {Document}
   * @private
   */
  _docClass = null;

  /**
   * Хранение метеоровской коллекции
   * @property {Mongo.Collection}
   * @private
   */
  _mongo = null;

  /**
   * Хранение методов
   * @type {Object}
   */
  methods = {};

  /**
   * Хранение публикаций
   * @type {Object}
   */
  publications = {};

  /**
   * Класс обертка для комфортной работы с коллекциями
   * @param {String} name - имя коллекции
   * @param {Document} DocumentClass - класс для документов коллекции
   * @param {SimpleSchema} Schema - схема для коллекции
   */
  constructor(name, DocumentClass, Schema) {
    super(name, {
      transform(doc) {
        return new DocumentClass(doc);
      },
    });
    this.schema = Schema;
    this._docClass = DocumentClass;
    this.attachSchema(Schema);
  }

  /**
   * Очистка данных, установка дефолтных значений схемой коллекции
   * @param {Object} data - объект для очистки схемой
   * @returns {Object}
   */
  clean(data) {
    return this.schema.clean(data);
  }

  /**
   * Валидация данных схемой коллекции
   * @param {Object} data - объект для валидации схемой
   */
  validate(data) {
    this.schema.validate(this.clean(data));
  }

  /**
   * Инстантенация документа
   * Используем arrow что бы не терялся контекст
   * @param {Object|Array} doc - данные для документа/ов
   * @return {Document|Array<Document>}
   */
  documented = (doc) => {
    if (Array.isArray(doc)) {
      return doc.map(d => new this._docClass(d));
    }
    return new this._docClass(doc);
  };

  /**
   * Проверяет существует ли документ
   * @where server
   * @param {String|Object} _id={} - запрос для поиска
   * @return {Boolean}
   */
  exists(_id = {}) {
    return !!this.findOne(_id, { fields: { _id: 1 } });
  }
}

export { Document, Collection, CoreSchema };
