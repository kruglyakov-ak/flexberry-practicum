export default {
  projections: {
    StoreProductE: {
      amount: {
        __caption__: 'Количество'
      },
      product: {
        __caption__: 'Товар',
        name: {
          __caption__: '~'
        },
        productCode: {
          __caption__: '~'
        }
      },
      storehouse: {
        __caption__: '~',
        number: {
          __caption__: '~'
        }
      }
    }
  },
  validations: {
    amount: {
      __caption__: 'Количество'
    },
    product: {
      __caption__: 'Товар'
    },
    storehouse: {
      __caption__: 'storehouse'
    }
  }
};
