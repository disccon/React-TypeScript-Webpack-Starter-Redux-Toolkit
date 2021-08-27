import { all } from 'redux-saga/effects'
import vlanRootSaga from '@state/vlan/vlanSaga'

export default function* rootSaga() {
  yield all([vlanRootSaga()])
}
