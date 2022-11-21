import EditFormController from "ember-flexberry/controllers/edit-form";
import { SimplePredicate } from "ember-flexberry-data/query/predicate";
import { set } from "@ember/object";
import { generateNotOrPredicateByList } from "../utils/generate-predicate-by-list";

export default EditFormController.extend({
  parentRoute: "i-i-s-shop-order-l",

  init() {
    this._super(...arguments);

    // Ограничение на лукап менеджера
    this.set(
      "managerLimitPredicate",
      new SimplePredicate("position", "eq", "Manager")
    );

    // Настройки лукапа товара
    this.set("productProperties", {
      choose: "showLookupDialog",
      remove: "removeLookupValue",
      displayAttributeName: "nameWCode",
      required: false,
      relationName: "product",
      projection: "ProductL",
      autocomplete: true,
      lookupLimitPredicate: undefined,
    });
  },

  actions: {
    configurateOrderItemRow(rowConfig) {
      let readonlyColumns = ["priceWTaxes", "totalSum"];
      set(rowConfig, "readonlyColumns", readonlyColumns);
    },
  },

  setProductLookupPredicate() {
    let productIds = [];
    let orderItems = this.get("model.orderItem");
    if (orderItems) {
      orderItems.forEach((item) => {
        let product = item.get("product");
        productIds.push(product.get("id"));
      });
    }

    let predicate = generateNotOrPredicateByList("id", "eq", productIds);
    this.set("productProperties.lookupLimitPredicate", predicate);
  },

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);

    if (attr.kind === "belongsTo") {
      switch (`${model.modelName}+${bindingPath}`) {
        case "i-i-s-shop-order-item+product":
          cellComponent.componentProperties = this.get("productProperties");
          break;
      }
    }

    if (bindingPath === "totalSum") {
      cellComponent.componentName = "order-item/total-sum";
    }

    return cellComponent;
  },
});
