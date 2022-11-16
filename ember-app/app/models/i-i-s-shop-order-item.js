import { buildValidations } from "ember-cp-validations";
import EmberFlexberryDataModel from "ember-flexberry-data/models/model";
import OfflineModelMixin from "ember-flexberry-data/mixins/offline-model";
import { computed } from '@ember/object';

import {
  defineProjections,
  ValidationRules,
  Model as OrderItemMixin,
} from "../mixins/regenerated/models/i-i-s-shop-order-item";

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ["model.i18n.locale"],
});

let Model = EmberFlexberryDataModel.extend(
  OfflineModelMixin,
  OrderItemMixin,
  Validations,
  {
    actualTotalSum: computed("priceWTaxes", "amount", function () {
      const price = Number(this.get("priceWTaxes") || 0);
      const amount = Number(this.get("amount") || 0);

      return (price * amount).toFixed(2);
    }),
  }
);

defineProjections(Model);

export default Model;
