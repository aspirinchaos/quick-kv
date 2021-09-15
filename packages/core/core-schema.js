import SimpleSchema from 'simpl-schema';
import messageBox from './message-box';

/**
 * Общая схема для наследования общих полей и переводов ошибок
 * @type {SimpleSchema}
 */
const CoreSchema = new SimpleSchema({
  createdAt: {
    type: Date,
    label: 'Дата создания',
    autoValue() {
      if (this.isInsert) {
        return new Date();
      }
      if (this.isUpsert) {
        return { $setOnInsert: new Date() };
      }
      this.unset();
    },
    optional: true,
  },
  updatedAt: {
    type: Date,
    label: 'Дата обновления',
    autoValue: () => new Date(),
    optional: true,
  },
});

CoreSchema.messageBox = messageBox;

export default CoreSchema;
