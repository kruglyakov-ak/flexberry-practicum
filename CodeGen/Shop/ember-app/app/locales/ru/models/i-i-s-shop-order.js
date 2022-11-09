export default {
  projections: {
    OrderE: {
      status: {
        __caption__: 'Статус'
      },
      shipmentDate: {
        __caption__: 'Дата отгрузки'
      },
      paymentDate: {
        __caption__: 'Дата оплаты'
      },
      totalSum: {
        __caption__: 'Стоимость заказа'
      },
      number: {
        __caption__: 'Номер'
      },
      createDate: {
        __caption__: 'Дата оформления'
      },
      manager: {
        __caption__: 'Менеджер',
        lastName: {
          __caption__: '~'
        },
        firstName: {
          __caption__: '~'
        },
        middleName: {
          __caption__: '~'
        }
      },
      orderItem: {
        __caption__: 'Содержимое заказа',
        amount: {
          __caption__: 'Количество'
        },
        priceWTaxes: {
          __caption__: 'Цена с налогом'
        },
        totalSum: {
          __caption__: 'Сумма по позиции'
        },
        product: {
          __caption__: 'Товар',
          name: {
            __caption__: '~'
          }
        }
      }
    },
    OrderL: {
      status: {
        __caption__: 'Статус'
      },
      shipmentDate: {
        __caption__: 'Дата отгрузки'
      },
      paymentDate: {
        __caption__: 'Дата оплаты'
      },
      totalSum: {
        __caption__: 'Стоимость заказа'
      },
      number: {
        __caption__: 'Номер'
      },
      createDate: {
        __caption__: 'Дата оформления'
      },
      manager: {
        __caption__: 'Менеджер',
        lastName: {
          __caption__: 'Менеджер'
        }
      },
      orderItem: {
        __caption__: '',
        amount: {
          __caption__: '~'
        },
        priceWTaxes: {
          __caption__: '~'
        }
      }
    }
  },
  validations: {
    status: {
      __caption__: 'Статус'
    },
    shipmentDate: {
      __caption__: 'Дата отгрузки'
    },
    paymentDate: {
      __caption__: 'Дата оплаты'
    },
    totalSum: {
      __caption__: 'Стоимость заказа'
    },
    manager: {
      __caption__: 'Менеджер'
    },
    orderItem: {
      __caption__: 'Содержимое заказа'
    }
  }
};
