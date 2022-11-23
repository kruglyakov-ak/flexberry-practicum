import { buildValidations } from "ember-cp-validations";
import EmberFlexberryDataModel from "ember-flexberry-data/models/model";
import OfflineModelMixin from "ember-flexberry-data/mixins/offline-model";
import { computed, observer } from "@ember/object";
import { once } from "@ember/runloop";
import { on } from "@ember/object/evented";

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
    taxes: 10,

    actualTotalSum: computed("priceWTaxes", "amount", function () {
      const price = Number(this.get("priceWTaxes") || 0);
      const amount = Number(this.get("amount") || 0);

      return (price * amount).toFixed(2);
    }),
    _priceWTaxesChanged: on(
      "init",
      observer("product", function () {
        if (!this.get("order.isPaid")) {
          once(this, "_priceWTaxesCompute");
        }
      })
    ),
  }
);

defineProjections(Model);

export default Model;
