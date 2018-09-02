import {
  CREATE_ORDER,
  MOVE_ORDER_TO_FARM,
  DELETE_ORDER_FROM_MARKET
} from './marketTypes';

export const createOrder = payload => ({
  type: CREATE_ORDER,
  payload
});
export const moveOrderToFarm = payload => ({
  type: MOVE_ORDER_TO_FARM,
  payload
});
export const deleteOrderFromMarket = payload => ({
  type: DELETE_ORDER_FROM_MARKET,
  payload
});
