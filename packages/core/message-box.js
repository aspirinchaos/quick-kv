import MessageBox from 'message-box';
import SimpleSchema from 'simpl-schema';

// Переводы почти всех ошибок для SimpleSchema
const messages = {
  ru: {
    required: 'Поле "{{label}}" не должно быть пустым',
    minString: '{{label}} слишком короткий',
    maxString: '{{label}} слишком длинный',
    minNumber: 'Минимальное значение "{{label}}" - {{min}}',
    maxNumber: 'Максимальное значение "{{label}}" - {{max}}',
    minNumberExclusive: 'Поле "{{label}}" должно быть больше {{min}}',
    maxNumberExclusive: 'Поле "{{label}}" должно быть меньше {{max}}',
    minDate: '{{label}} не может быть прошедшей датой',
    maxDate: '{{label}} не может быть после {{max}}',
    badDate: '{{label}} некорректная дата',
    minCount: 'You must specify at least {{minCount}} values',
    maxCount: 'You cannot specify more than {{maxCount}} values',
    noDecimal: '{{label}} должно быть целым числом',
    notAllowed: '{{value}} недопустимое значения для {{label}}',
    expectedType: 'Поле "{{label}}" должно быть {{dataType}}',
    insertNotAllowed: '{{label}} нельзя задать при создании',
    updateNotAllowed: '{{label}} нельзя изменить',
    regEx({ label, type, regExp }) {
      // See if there's one where exp matches this expression
      switch (regExp) {
        case (SimpleSchema.RegEx.Email.toString()):
        case (SimpleSchema.RegEx.EmailWithTLD.toString()):
          return `Поле ${label} содержит некорректный email`;
        case (SimpleSchema.RegEx.Domain.toString()):
        case (SimpleSchema.RegEx.WeakDomain.toString()):
          return `Поле ${label} содержит некорректное доменное имя`;
        case (SimpleSchema.RegEx.IP.toString()):
          return `Поле ${label} содержит некорректный IP адрес`;
        case (SimpleSchema.RegEx.IPv4.toString()):
          return `Поле ${label} содержит некорректный IPv4 адрес`;
        case (SimpleSchema.RegEx.IPv6.toString()):
          return `Поле ${label} содержит некорректный IPv6 адрес`;
        case (SimpleSchema.RegEx.Url.toString()):
          return `Поле ${label} содержит некорректную ссылку`;
        case (SimpleSchema.RegEx.Id.toString()):
          return `Поле ${label} должно содержать только букв и цифры`;
        case (SimpleSchema.RegEx.ZipCode.toString()):
          return `Поле ${label} содержит некорректный zip`;
        case (SimpleSchema.RegEx.Phone.toString()):
          return `Поле ${label} содержит некорректный номер телефона`;
        default:
          return `Поле ${label} неккоректно заполнено`;
      }
    },
    keyNotInSchema: '{{name}} is not allowed by the schema',
  },
};

// Зададим дефолтный список ошибок
MessageBox.defaults({
  initialLanguage: 'ru', // optional; default is 'en'
  messages,
});

// Создадим список ошибок, в дальнейшем можно было переопределить
// или добавить свои ошибки
const messageBox = new MessageBox({
  initialLanguage: 'ru',
  messages,
});

export default messageBox;
