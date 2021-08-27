import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface StateVlanInterface {
  isAddVlanModalVisible: boolean
}

const initialVlanState: StateVlanInterface = {
  isAddVlanModalVisible: false,
}

export type ModalNameVlanType = 'isAddVlanModalVisible' | 'isEditVlanModalVisible' | 'isAddIpModalVisible' | 'isEditIpModalVisible'

const vlanState = createSlice({
  name: 'vlan',
  initialState: initialVlanState,
  reducers: {
    submitAddFormVlanAction(state, { payload: { modalName } }: PayloadAction<{ modalName: ModalNameVlanType }>) {
      state[modalName] = false
      state.isVlanLoading = true
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchQuestionsFail, (state, action) => {
  //     state.name = action
  //   })
  // },
})

export const { submitAddFormVlanAction } = vlanState.actions

export default vlanState.reducer
