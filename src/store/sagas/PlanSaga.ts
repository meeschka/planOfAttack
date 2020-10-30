import { put, takeEvery } from "redux-saga/effects";

import mockPlans from "../../__mocks__/mockPlans";
import {
  GET_PLANS,
  ADD_PLAN,
  DELETE_PLAN,
  SET_PLAN_ERROR,
  SET_PLAN_LOADING,
  GET_PLANS_SAGA,
  ADD_PLAN_SAGA,
  DELETE_PLAN_SAGA,
  GetPlansSaga,
  AddPlanSaga,
  DeletePlanSaga,
} from "../types/Plan";

export function* getPlans(action: GetPlansSaga) {
  try {
    yield put({ type: SET_PLAN_LOADING, payload: true });
    // api call would go here
    const plans = mockPlans;
    yield put({ type: GET_PLANS, payload: plans });
    yield put({ type: SET_PLAN_LOADING, payload: false });
  } catch (error) {
    yield put({ type: SET_PLAN_ERROR, payload: error.message });
    yield put({ type: SET_PLAN_LOADING, payload: false });
  }
}

export function* addPlan(action: AddPlanSaga) {
  try {
    yield put({ type: SET_PLAN_LOADING, payload: true });
    // api call would go here, yield Call(apiClient, getRequestBody(action.payload))
    yield put({ type: ADD_PLAN, payload: action.payload });
    yield put({ type: SET_PLAN_LOADING, payload: false });
  } catch (error) {
    yield put({ type: SET_PLAN_ERROR, payload: error.message });
    yield put({ type: SET_PLAN_LOADING, payload: false });
  }
}

export function* deletePlan(action: DeletePlanSaga) {
  try {
    yield put({ type: SET_PLAN_LOADING, payload: true });
    // api call would go here
    yield put({ type: DELETE_PLAN, payload: action.payload });
    yield put({ type: SET_PLAN_LOADING, payload: false });
  } catch (error) {
    yield put({ type: SET_PLAN_ERROR, payload: error.message });
    yield put({ type: SET_PLAN_LOADING, payload: false });
  }
}

export function* watchPlanSaga() {
  yield takeEvery(GET_PLANS_SAGA, getPlans);
  yield takeEvery(ADD_PLAN_SAGA, addPlan);
  yield takeEvery(DELETE_PLAN_SAGA, deletePlan);
}
