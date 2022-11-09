export default {
  projections: {
    OrderItemE: {
      amount: {
        __caption__: 'amount'
      },
      priceWTaxes: {
        __caption__: 'priceWTaxes'
      },
      totalSum: {
        __caption__: 'totalSum'
      },
      product: {
        __caption__: 'product',
        name: {
          __caption__: 'name'
        },
        productCode: {
          __caption__: 'productCode'
        },
        price: {
          __caption__: 'price'
        }
      }
    },
    OrderItemInOrderL: {
      amount: {
        __caption__: 'amount'
      },
      priceWTaxes: {
        __caption__: 'priceWTaxes'
      }
    }
  },
  validations: {
    amount: {
      __caption__: 'amount'
    },
    priceWTaxes: {
      __caption__: 'priceWTaxes'
    },
    totalSum: {
      __caption__: 'totalSum'
    },
    product: {
      __caption__: 'product'
    },
    order: {
      __caption__: 'order'
    }
  }
};
