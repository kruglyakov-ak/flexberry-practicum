import $ from "jquery";
import { buildValidations } from "ember-cp-validations";
import { computed } from "@ember/object";
import OrderStatusEnum from '../enums/i-i-s-shop-order-status';

import {
  defineBaseModel,
  defineProjections,
  ValidationRules,
  Model as OrderMixin,
} from "../mixins/regenerated/models/i-i-s-shop-order";

import DocumentModel from "./i-i-s-shop-document";
import { ValidationRules as ParentValidationRules } from "../mixins/regenerated/models/i-i-s-shop-document";

const Validations = buildValidations(
  $.extend({}, ParentValidationRules, ValidationRules),
  {
    dependentKeys: ["model.i18n.locale"],
  }
);

let Model = DocumentModel.extend(OrderMixin, Validations, {
  actualTotalSum: computed("orderItem.@each.{amount,priceWTaxes}", function () {
    return this.get("orderItem").reduce((sum, item) => {
      const priceWTaxes = Number(item.get("priceWTaxes") || 0);
      const amount = Number(item.get("amount") || 0);
      if (Number.isNaN(priceWTaxes) || Number.isNaN(amount)) {
        throw new Error(
          `Invalid 'priceWTaxes' or 'amount' for order item: '${item}'.`
        );
      }

      return sum + priceWTaxes * amount;
    }, 0);
  }),
  isPaid: computed('status', function() {
    const status = this.get('status');
    const dirtyAttributes = this.get('hasDirtyAttributes');

    return status === OrderStatusEnum.Paid && !dirtyAttributes;
  })
});

defineBaseModel(Model);
defineProjections(Model);

export default Model;
