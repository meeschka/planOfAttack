// data types
export interface Plan {
  id: string;
  title: string;
  description: string;
  notes?: string;
  project?: string;
  materials?: [string];
}

export interface PlanState {
  plans: Plan[];
  loading: boolean;
  error: string | undefined;
}

// action types
export const GET_PLANS = "GET_PLANS";
export const ADD_PLAN = "ADD_PLAN";
export const DELETE_PLAN = "DELETE_PLAN";
export const SET_PLAN_LOADING = "SET_PLAN_LOADING";
export const SET_PLAN_ERROR = "SET_PLAN_ERROR";
export const GET_PLANS_SAGA = "GET_PLANS_SAGA";
export const ADD_PLAN_SAGA = "ADD_PLAN_SAGA";
export const DELETE_PLAN_SAGA = "DELETE_PLAN_SAGA";

interface GetPlansAction {
  type: typeof GET_PLANS;
  payload: Plan[];
}

interface AddPlanAction {
  type: typeof ADD_PLAN;
  payload: Plan;
}

interface DeletePlanAction {
  type: typeof DELETE_PLAN;
  payload: Plan;
}

interface SetPlanLoadingAction {
  type: typeof SET_PLAN_LOADING;
  payload: boolean;
}

interface SetPlanErrorAction {
  type: typeof SET_PLAN_ERROR;
  payload: string | undefined;
}

export interface GetPlansSaga {
  type: typeof GET_PLANS_SAGA;
}

export interface AddPlanSaga {
  type: typeof ADD_PLAN_SAGA;
  payload: Plan;
}

export interface DeletePlanSaga {
  type: typeof DELETE_PLAN_SAGA;
  payload: Plan;
}

export type PlanActionTypes =
  | GetPlansAction
  | AddPlanAction
  | DeletePlanAction
  | SetPlanLoadingAction
  | SetPlanErrorAction
  | GetPlansSaga
  | AddPlanSaga
  | DeletePlanSaga;
