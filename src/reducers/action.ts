import { CreatePropsData } from './reducer'

export enum ActionTypes {
  ADD_COFFEE_CART = 'ADD_COFFEE_CART',
  DECREMENT_COFFEE_CART = 'DECREMENT_COFFEE_CART',
  REMOVE_COFFEE_CART = 'REMOVE_COFFEE_CART',
}

export function addCoffeeCart(dataNewCoffee: CreatePropsData) {
  return {
    type: ActionTypes.ADD_COFFEE_CART,
    payload: { dataNewCoffee },
  }
}

export function decrementCoffeeCart(dataNewCoffee: CreatePropsData[]) {
  return {
    type: ActionTypes.DECREMENT_COFFEE_CART,
    payload: dataNewCoffee,
  }
}

export function removeCoffeeCart(id: number) {
  return {
    type: ActionTypes.REMOVE_COFFEE_CART,
    payload: { id },
  }
}
