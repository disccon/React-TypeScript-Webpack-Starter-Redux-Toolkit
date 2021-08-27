import { combineReducers } from 'redux'
import { History } from 'history'
import { connectRouter } from 'connected-react-router'
import vlan, { StateVlanInterface } from '../vlan/vlanStateSlice'

export interface AppStateInterface {
  vlan: StateVlanInterface
}

export const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    vlan,
  })
