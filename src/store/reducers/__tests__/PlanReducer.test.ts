import mockPlans from "../../../__mocks__/mockPlans";
import {
  PlanState,
  GET_PLANS,
  ADD_PLAN,
  DELETE_PLAN,
  SET_PLAN_ERROR,
  SET_PLAN_LOADING,
  PlanActionTypes,
} from "../../types/Plan";
import planReducer from "../PlanReducer";

describe("plan reducer", () => {
  it("should return the initial state", () => {
    expect(planReducer(undefined, {})).toEqual({
      plans: [],
      loading: false,
      error: undefined,
    });
  });

  it("should return a new loading state", () => {
    const mockState: PlanState = {
      plans: [],
      loading: false,
      error: undefined,
    };
    const mockAction: PlanActionTypes = {
      type: SET_PLAN_LOADING,
      payload: true,
    };
    expect(planReducer(mockState, mockAction).loading).toBe(true);
  });

  it("should return a new error state", () => {
    const mockState: PlanState = {
      plans: [],
      loading: false,
      error: undefined,
    };
    const mockAction: PlanActionTypes = {
      type: SET_PLAN_ERROR,
      payload: "Error: Some sort of problem",
    };
    expect(planReducer(mockState, mockAction).error).toBe(
      "Error: Some sort of problem"
    );
  });

  it("should populate the plans when getPlans is called", () => {
    const mockState: PlanState = {
      plans: [],
      loading: false,
      error: undefined,
    };
    const mockAction: PlanActionTypes = {
      type: GET_PLANS,
      payload: mockPlans,
    };
    expect(planReducer(mockState, mockAction).plans).toEqual(mockPlans);
  });

  it("should add a plan", () => {
    const mockState: PlanState = {
      plans: [mockPlans[0]],
      loading: false,
      error: undefined,
    };
    const mockAction: PlanActionTypes = {
      type: ADD_PLAN,
      payload: mockPlans[1],
    };
    expect(planReducer(mockState, mockAction).plans).toEqual(mockPlans);
  });

  it("should delete a plan", () => {
    const mockState: PlanState = {
      plans: mockPlans,
      loading: false,
      error: undefined,
    };
    const mockAction: PlanActionTypes = {
      type: DELETE_PLAN,
      payload: mockPlans[0],
    };
    expect(planReducer(mockState, mockAction).plans).toEqual([mockPlans[1]]);
  });
});
