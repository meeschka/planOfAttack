import { expectSaga } from "redux-saga-test-plan";

import mockPlans from "../../../__mocks__/mockPlans";
import PlanReducer from "../../reducers/PlanReducer";
import {
  GET_PLANS,
  ADD_PLAN,
  DELETE_PLAN,
  SET_PLAN_LOADING,
  GET_PLANS_SAGA,
  ADD_PLAN_SAGA,
  DELETE_PLAN_SAGA,
} from "../../types/Plan";
import { watchPlanSaga, getPlans, addPlan, deletePlan } from "../PlanSaga";

describe("plan saga", () => {
  it("should get mock plans from GET_PLANS_SAGA", () => {
    const expectedPlans = mockPlans;

    return expectSaga(getPlans, { type: GET_PLANS_SAGA })
      .withReducer(PlanReducer)
      .put({
        type: SET_PLAN_LOADING,
        payload: true,
      })
      .put({
        type: GET_PLANS,
        payload: expectedPlans,
      })
      .put({
        type: SET_PLAN_LOADING,
        payload: false,
      })
      .hasFinalState({
        plans: mockPlans,
        loading: false,
        error: undefined,
      })
      .run();
  });
  // test error state once you actually call an api

  it("should add a plan from ADD_PLAN_SAGA", () => {
    const newPlan = {
      id: "123456",
      title: "Navy coat",
      description: "Melton wool, using that Vogue pattern you have",
    };

    return expectSaga(addPlan, { type: ADD_PLAN_SAGA, payload: newPlan })
      .withReducer(PlanReducer)
      .put({
        type: SET_PLAN_LOADING,
        payload: true,
      })
      .put({
        type: ADD_PLAN,
        payload: newPlan,
      })
      .put({
        type: SET_PLAN_LOADING,
        payload: false,
      })
      .hasFinalState({
        plans: [newPlan],
        loading: false,
        error: undefined,
      })
      .run();
  });

  it("should delete plans from DELETE_PLAN_SAGA", () => {
    return expectSaga(deletePlan, {
      type: DELETE_PLAN_SAGA,
      payload: mockPlans[0],
    })
      .put({
        type: SET_PLAN_LOADING,
        payload: true,
      })
      .put({
        type: DELETE_PLAN,
        payload: mockPlans[0],
      })
      .put({
        type: SET_PLAN_LOADING,
        payload: false,
      })
      .run();
  });

  it("should dispatch SAGA actions from watchPlanSaga", () => {
    return expectSaga(watchPlanSaga)
      .dispatch({ type: "GET_PLANS_SAGA" })
      .dispatch({ type: "ADD_PLAN_SAGA" })
      .dispatch({ type: "REMOVE_PLAN_SAGA" })
      .run();
  });
});
