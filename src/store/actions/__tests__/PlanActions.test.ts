import mockPlans from "../../../__mocks__/mockPlans";
import {
  GET_PLANS,
  ADD_PLAN,
  DELETE_PLAN,
  SET_PLAN_ERROR,
  SET_PLAN_LOADING,
  GET_PLANS_SAGA,
  ADD_PLAN_SAGA,
  DELETE_PLAN_SAGA,
} from "../../types/Plan";
import {
  addPlan,
  deletePlan,
  getPlans,
  getPlansSaga,
  setPlanLoading,
  setPlanError,
  addPlanSaga,
  deletePlanSaga,
} from "../PlanActions";

describe("plan actions", () => {
  const samplePlan = mockPlans[0];
  it("should create an action to add a plan", () => {
    const expectedAction = {
      type: ADD_PLAN,
      payload: samplePlan,
    };
    expect(addPlan(samplePlan)).toEqual(expectedAction);
  });
  it("should create an action to delete a plan", () => {
    const expectedAction = {
      type: DELETE_PLAN,
      payload: samplePlan,
    };
    expect(deletePlan(samplePlan)).toEqual(expectedAction);
  });
  it("should create an action to get plans", () => {
    const expectedAction = {
      type: GET_PLANS,
      payload: mockPlans,
    };
    expect(getPlans()).toEqual(expectedAction);
  });
  it("should create an action to set loading state", () => {
    const expectedAction = {
      type: SET_PLAN_LOADING,
      payload: true,
    };
    expect(setPlanLoading(true)).toEqual(expectedAction);
  });
  it("should create an action to set error state", () => {
    const expectedAction = {
      type: SET_PLAN_ERROR,
      payload: "Error: Things are broken",
    };
    expect(setPlanError("Error: Things are broken")).toEqual(expectedAction);
  });
  it("should create an action to trigger plan saga", () => {
    const expectedAction = {
      type: GET_PLANS_SAGA,
    };
    expect(getPlansSaga()).toEqual(expectedAction);
  });
  it("should create an action to add a plan", () => {
    const expectedAction = {
      type: ADD_PLAN_SAGA,
      payload: samplePlan,
    };
    expect(addPlanSaga(samplePlan)).toEqual(expectedAction);
  });
  it("should create an action to delete a plan", () => {
    const expectedAction = {
      type: DELETE_PLAN_SAGA,
      payload: samplePlan,
    };
    expect(deletePlanSaga(samplePlan)).toEqual(expectedAction);
  });
});
