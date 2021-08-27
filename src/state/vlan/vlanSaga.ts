import { put, takeLatest, all, call, fork } from 'redux-saga/effects'
import { submitAddFormVlanAction } from './vlanStateSlice'

function* submitAddFormVlanSaga() {
  try {
  } catch (error) {}
}

export default function* vlanRootSaga() {
  yield all([takeLatest(submitAddFormVlanAction.type, submitAddFormVlanSaga)])
}
