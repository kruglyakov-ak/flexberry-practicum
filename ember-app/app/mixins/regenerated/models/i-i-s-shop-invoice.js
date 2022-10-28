import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  status: DS.attr('i-i-s-shop-invoice-status', { defaultValue: InvoiceStatusEnum.New }),
  shipmentDateTime: DS.attr('date'),
  totalSum: DS.attr('decimal'),
  totalWeight: DS.attr('decimal'),
  note: DS.attr('string'),
  customerName: DS.attr('string'),
  order: DS.belongsTo('i-i-s-shop-order', { inverse: null, async: false }),
  responsiblePerson: DS.belongsTo('i-i-s-shop-employee', { inverse: null, async: false }),
  invoiceItem: DS.hasMany('i-i-s-shop-invoice-item', { inverse: 'invoice', async: false })
});

export let ValidationRules = {
  status: {
    descriptionKey: 'models.i-i-s-shop-invoice.validations.status.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  shipmentDateTime: {
    descriptionKey: 'models.i-i-s-shop-invoice.validations.shipmentDateTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  totalSum: {
    descriptionKey: 'models.i-i-s-shop-invoice.validations.totalSum.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  totalWeight: {
    descriptionKey: 'models.i-i-s-shop-invoice.validations.totalWeight.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  note: {
    descriptionKey: 'models.i-i-s-shop-invoice.validations.note.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  customerName: {
    descriptionKey: 'models.i-i-s-shop-invoice.validations.customerName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  order: {
    descriptionKey: 'models.i-i-s-shop-invoice.validations.order.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  responsiblePerson: {
    descriptionKey: 'models.i-i-s-shop-invoice.validations.responsiblePerson.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  invoiceItem: {
    descriptionKey: 'models.i-i-s-shop-invoice.validations.invoiceItem.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineBaseModel = function (modelClass) {
  modelClass.reopenClass({
    _parentModelName: 'i-i-s-shop-document'
  });
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('InvoiceE', 'i-i-s-shop-invoice', {
    status: attr('Статус', { index: 0 }),
    shipmentDateTime: attr('Дата и время отгрузки', { index: 1 }),
    totalSum: attr('Сумма заказа', { index: 2 }),
    totalWeight: attr('Вес заказа (кг)', { index: 3 }),
    note: attr('Примечание', { index: 4 }),
    customerName: attr('Получатель', { index: 5 }),
    number: attr('Номер', { index: 6 }),
    createDate: attr('Дата оформления', { index: 7 }),
    order: belongsTo('i-i-s-shop-order', 'Заказ', {
      number: attr('~', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'number' }),
    responsiblePerson: belongsTo('i-i-s-shop-employee', 'Товар выдал', {
      lastName: attr('~', { index: 11, hidden: true })
    }, { index: 10, displayMemberPath: 'lastName' }),
    invoiceItem: hasMany('i-i-s-shop-invoice-item', 'Список товаров к выдаче', {
      amount: attr('Количество', { index: 0 }),
      weight: attr('Вес (кг)', { index: 1 }),
      price: attr('Цена', { index: 2 }),
      totalSum: attr('Сумма по позиции', { index: 3 }),
      product: belongsTo('i-i-s-shop-product', 'Товар', {
        name: attr('~', { index: 5, hidden: true })
      }, { index: 4, displayMemberPath: 'name' })
    })
  });

  modelClass.defineProjection('InvoiceL', 'i-i-s-shop-invoice', {
    status: attr('Статус', { index: 0 }),
    shipmentDateTime: attr('Дата и время отгрузки', { index: 1 }),
    totalSum: attr('Сумма заказа', { index: 2 }),
    totalWeight: attr('Вес заказа', { index: 3 }),
    note: attr('Примечание', { index: 4 }),
    customerName: attr('Получатель', { index: 5 }),
    number: attr('Номер', { index: 6 }),
    createDate: attr('Дата оформления', { index: 7 }),
    order: belongsTo('i-i-s-shop-order', 'Номер заказа', {
      number: attr('Номер заказа', { index: 8 })
    }, { index: -1, hidden: true }),
    responsiblePerson: belongsTo('i-i-s-shop-employee', 'Товар выдал', {
      lastName: attr('Товар выдал', { index: 9 })
    }, { index: -1, hidden: true })
  });
};
