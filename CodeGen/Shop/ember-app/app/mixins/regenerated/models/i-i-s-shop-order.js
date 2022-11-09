import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  status: DS.attr('состояние-заказа', { defaultValue: 'New' }),
  shipmentDate: DS.attr('date'),
  paymentDate: DS.attr('date'),
  /**
    Non-stored property.

    @property totalSum
  */
  totalSum: DS.attr('decimal'),
  /**
    Method to set non-stored property.
    Please, use code below in model class (outside of this mixin) otherwise it will be replaced during regeneration of models.
    Please, implement 'totalSumCompute' method in model class (outside of this mixin) if you want to compute value of 'totalSum' property.

    @method _totalSumCompute
    @private
    @example
      ```javascript
      _totalSumChanged: on('init', observer('totalSum', function() {
        once(this, '_totalSumCompute');
      }))
      ```
  */
  _totalSumCompute: function() {
    let result = (this.totalSumCompute && typeof this.totalSumCompute === 'function') ? this.totalSumCompute() : null;
    this.set('totalSum', result);
  },
  manager: DS.belongsTo('i-i-s-shop-employee', { inverse: null, async: false }),
  orderItem: DS.hasMany('i-i-s-shop-order-item', { inverse: 'order', async: false })
});

export let ValidationRules = {
  status: {
    descriptionKey: 'models.i-i-s-shop-order.validations.status.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  shipmentDate: {
    descriptionKey: 'models.i-i-s-shop-order.validations.shipmentDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  paymentDate: {
    descriptionKey: 'models.i-i-s-shop-order.validations.paymentDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  totalSum: {
    descriptionKey: 'models.i-i-s-shop-order.validations.totalSum.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  manager: {
    descriptionKey: 'models.i-i-s-shop-order.validations.manager.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  orderItem: {
    descriptionKey: 'models.i-i-s-shop-order.validations.orderItem.__caption__',
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
  modelClass.defineProjection('OrderE', 'i-i-s-shop-order', {
    status: attr('Статус', { index: 0 }),
    shipmentDate: attr('Дата отправки', { index: 1 }),
    paymentDate: attr('Дата оплаты', { index: 2 }),
    totalSum: attr('Сумма заказа', { index: 3 }),
    number: attr('Номер', { index: 4 }),
    createDate: attr('Дата создания', { index: 5 }),
    manager: belongsTo('i-i-s-shop-employee', 'Менеджер', {
      lastName: attr('~', { index: 7, hidden: true }),
      firstName: attr('~', { index: 8, hidden: true }),
      middleName: attr('~', { index: 9, hidden: true })
    }, { index: 6, displayMemberPath: 'lastName' }),
    orderItem: hasMany('i-i-s-shop-order-item', 'Содержимое заказа', {
      amount: attr('Количество', { index: 0 }),
      priceWTaxes: attr('Цена с налогом', { index: 1 }),
      totalSum: attr('Сумма по позиции', { index: 2 }),
      product: belongsTo('i-i-s-shop-product', 'Товар', {
        name: attr('~', { index: 4, hidden: true })
      }, { index: 3, displayMemberPath: 'name' })
    })
  });

  modelClass.defineProjection('OrderL', 'i-i-s-shop-order', {
    status: attr('Статус', { index: 0 }),
    shipmentDate: attr('Дата отгрузки', { index: 1 }),
    paymentDate: attr('Дата оплаты', { index: 2 }),
    totalSum: attr('Стоимость заказа', { index: 3 }),
    number: attr('Номер', { index: 4 }),
    createDate: attr('Дата создания', { index: 5 }),
    manager: belongsTo('i-i-s-shop-employee', 'Менеджер', {
      lastName: attr('Менеджер', { index: 6 })
    }, { index: -1, hidden: true }),
    orderItem: hasMany('i-i-s-shop-order-item', '', {
      amount: attr('~', { index: 0, hidden: true }),
      priceWTaxes: attr('~', { index: 1, hidden: true })
    })
  });
};
