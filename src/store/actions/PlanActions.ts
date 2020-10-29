import mockPlans from "../../__mocks__/mockPlans";
import {
  Plan,
  GET_PLANS,
  ADD_PLAN,
  DELETE_PLAN,
  SET_PLAN_ERROR,
  SET_PLAN_LOADING,
  GET_PLANS_SAGA,
  PlanActionTypes,
} from "../types/Plan";

export function getPlans(): PlanActionTypes {
  return {
    type: GET_PLANS,
    payload: mockPlans,
  };
}

export function addPlan(newPlan: Plan): PlanActionTypes {
  return {
    type: ADD_PLAN,
    payload: newPlan,
  };
}

export function deletePlan(deletedPlan: Plan): PlanActionTypes {
  return {
    type: DELETE_PLAN,
    payload: deletedPlan,
  };
}

export function setPlanError(error: string | undefined): PlanActionTypes {
  return {
    type: SET_PLAN_ERROR,
    payload: error,
  };
}

export function setPlanLoading(loadingState: boolean): PlanActionTypes {
  return {
    type: SET_PLAN_LOADING,
    payload: loadingState,
  };
}

export const getPlansSaga = () => {
  return {
    type: GET_PLANS_SAGA,
  };
};
