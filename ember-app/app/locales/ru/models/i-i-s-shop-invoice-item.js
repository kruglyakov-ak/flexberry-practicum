export default {
  projections: {
    InvoiceItemE: {
      amount: {
        __caption__: 'Количество'
      },
      weight: {
        __caption__: 'Вес (кг)'
      },
      price: {
        __caption__: 'Цена'
      },
      totalSum: {
        __caption__: 'Сумма по позиции'
      },
      product: {
        __caption__: 'Товар',
        name: {
          __caption__: '~'
        },
        productCode: {
          __caption__: '~'
        }
      }
    }
  },
  validations: {
    amount: {
      __caption__: 'Количество'
    },
    weight: {
      __caption__: 'Вес (кг)'
    },
    price: {
      __caption__: 'Цена'
    },
    totalSum: {
      __caption__: 'Сумма по позиции'
    },
    product: {
      __caption__: 'Товар'
    },
    invoice: {
      __caption__: 'invoice'
    }
  }
};
