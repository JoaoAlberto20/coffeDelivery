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
        draft.itemProductDuplicated = action.payload
      })
    case ActionTypes.REMOVE_COFFEE_CART:
      return produce(state, (draft) => {
        const removed = draft.itemProductDuplicated.filter(
          (product) => product.id !== action.payload.id,
        )
        draft.itemProductDuplicated = removed
      })
    default:
      return state
  }
}
