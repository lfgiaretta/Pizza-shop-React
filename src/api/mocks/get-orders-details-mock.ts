import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '2424353234234',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: 7000,
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 1000,
        product: { name: 'Pizza Queijo' },
        quantity: 1,
      },
      {
        id: 'order-item-2',
        priceInCents: 3000,
        product: { name: 'Pizza Carne' },
        quantity: 2,
      },
    ],
  })
})
