/* eslint-disable prettier/prettier */
import { produce } from 'immer'

import { ActionTypes } from './action'

export interface CreatePropsData {
  id: number
  price: string
  name: string
  description?: string
  tag?: string[]
  image: string
}

interface stateInitial {
  itemProductDuplicated: CreatePropsData[]
}

export function coffeeReducer(state: stateInitial, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE_CART:
      return produce(state, (draft) => {
        draft.itemProductDuplicated.push(action.payload.dataNewCoffee)
      })
    case ActionTypes.DECREMENT_COFFEE_CART:
      return produce(state, (draft) => {
        const productPrevState = draft.itemProductDuplicated.filter(
          (product, index) => product.id !== action.payload.id,
        )
        const productItemRemoved = draft.itemProductDuplicated
        .filter((product, index) => product.id === action.payload.id)
        .slice(1)
      })
    case ActionTypes.REMOVE_COFFEE_CART: 
      return produce(state, (draft) => {
        const removed = draft.itemProductDuplicated.filter(
          (product, index) => product.id !== action.payload.id,
        )
        draft.itemProductDuplicated = removed
      })
    default:
      return state
  }
}
