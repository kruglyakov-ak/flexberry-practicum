export default {
  projections: {
    InvoiceE: {
      status: {
        __caption__: 'Статус'
      },
      shipmentDateTime: {
        __caption__: 'Дата и время отгрузки'
      },
      totalSum: {
        __caption__: 'Сумма заказа'
      },
      totalWeight: {
        __caption__: 'Вес заказа (кг)'
      },
      note: {
        __caption__: 'Примечание'
      },
      customerName: {
        __caption__: 'Получатель'
      },
      number: {
        __caption__: 'Номер'
      },
      createDate: {
        __caption__: 'Дата оформления'
      },
      order: {
        __caption__: 'Заказ',
        number: {
          __caption__: '~'
        }
      },
      responsiblePerson: {
        __caption__: 'Товар выдал',
        lastName: {
          __caption__: '~'
        }
      },
      invoiceItem: {
        __caption__: 'Список товаров к выдаче',
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
    InvoiceL: {
      status: {
        __caption__: 'Статус'
      },
      shipmentDateTime: {
        __caption__: 'Дата и время отгрузки'
      },
      totalSum: {
        __caption__: 'Сумма заказа'
      },
      totalWeight: {
        __caption__: 'Вес заказа'
      },
      note: {
        __caption__: 'Примечание'
      },
      customerName: {
        __caption__: 'Получатель'
      },
      number: {
        __caption__: 'Номер'
      },
      createDate: {
        __caption__: 'Дата оформления'
      },
      order: {
        __caption__: 'Номер заказа',
        number: {
          __caption__: 'Номер заказа'
        }
      },
      responsiblePerson: {
        __caption__: 'Товар выдал',
        lastName: {
          __caption__: 'Товар выдал'
        }
      }
    }
  },
  validations: {
    status: {
      __caption__: 'Статус'
    },
    shipmentDateTime: {
      __caption__: 'Дата и время отгрузки'
    },
    totalSum: {
      __caption__: 'Сумма заказа'
    },
    totalWeight: {
      __caption__: 'Вес заказа (кг)'
    },
    note: {
      __caption__: 'Примечание'
    },
    customerName: {
      __caption__: 'Получатель'
    },
    order: {
      __caption__: 'Заказ'
    },
    responsiblePerson: {
      __caption__: 'Товар выдал'
    },
    invoiceItem: {
      __caption__: 'Список товаров к выдаче'
    }
  }
};
