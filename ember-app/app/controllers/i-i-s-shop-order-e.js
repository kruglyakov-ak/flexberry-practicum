import EditFormController from "ember-flexberry/controllers/edit-form";
import { set } from "@ember/object";

export default EditFormController.extend({
  parentRoute: "i-i-s-shop-order-l",

  actions: {
    configurateOrderItemRow(rowConfig) {
      let readonlyColumns = ["priceWTaxes", "totalSum"];
      set(rowConfig, "readonlyColumns", readonlyColumns);
    },
  },

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === "belongsTo") {
      switch (`${model.modelName}+${bindingPath}`) {
        case "i-i-s-shop-order-item+product":
          cellComponent.componentProperties = {
            choose: "showLookupDialog",
            remove: "removeLookupValue",
            displayAttributeName: "nameWCode",
            required: false,
            relationName: "product",
            projection: "ProductL",
            autocomplete: true,
          };
          break;
      }
    }

    if (bindingPath === "totalSum") {
      cellComponent.componentName = "order-item/total-sum";
    }

    return cellComponent;
  },
});
