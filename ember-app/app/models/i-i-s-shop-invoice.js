import $ from 'jquery';
import { buildValidations } from 'ember-cp-validations';
import { computed } from "@ember/object";

import {
  defineBaseModel,
  defineProjections,
  ValidationRules,
  Model as InvoiceMixin
} from '../mixins/regenerated/models/i-i-s-shop-invoice';

import DocumentModel from './i-i-s-shop-document';
import { ValidationRules as ParentValidationRules } from '../mixins/regenerated/models/i-i-s-shop-document';

const Validations = buildValidations($.extend({}, ParentValidationRules, ValidationRules), {
  dependentKeys: ['model.i18n.locale'],
});

let Model = DocumentModel.extend(InvoiceMixin, Validations, {
  actualTotalSum: computed("invoiceItem.@each.{totalSum}", function () {
    return this.get("invoiceItem").reduce((sum, item) => {
      const totalSum = Number(item.get("totalSum") || 0);
      if (Number.isNaN(totalSum)) {
        throw new Error(
          `Invalid 'totalSum' for invoice item: '${item}'.`
        );
      }

      return sum + totalSum;
    }, 0);
  }),
  actualTotalWeight: computed("invoiceItem.@each.{weight}", function () {
    return this.get("invoiceItem").reduce((sum, item) => {
      const weight = Number(item.get("weight") || 0);
      if (Number.isNaN(weight)) {
        throw new Error(
          `Invalid 'weight' for invoice item: '${item}'.`
        );
      }

      return sum + weight;
    }, 0);
  }),
});

defineBaseModel(Model);
defineProjections(Model);

export default Model;
