import {
  PlanState,
  PlanActionTypes,
  GET_PLANS,
  SET_PLAN_LOADING,
  SET_PLAN_ERROR,
  ADD_PLAN,
  DELETE_PLAN,
} from "../types/Plan";

export const initialState: PlanState = {
  plans: [],
  loading: false,
  error: undefined,
};

const planReducer = (
  plansState = initialState,
  action: PlanActionTypes
): PlanState => {
  switch (action.type) {
    case SET_PLAN_LOADING: {
      return Object.assign({}, plansState, {
        loading: action.payload,
      });
    }
    case SET_PLAN_ERROR: {
      return Object.assign({}, plansState, {
        error: action.payload,
      });
    }
    case GET_PLANS:
      return {
        ...plansState,
        plans: Object.assign([], action.payload),
      };
    case ADD_PLAN:
      return {
        ...plansState,
        plans: Object.assign(
          [],
          plansState.plans,
          plansState.plans.concat(action.payload)
        ),
      };
    case DELETE_PLAN:
      return {
        ...plansState,
        plans: [...plansState.plans].filter(
          (plan) => plan.id !== action.payload.id
        ),
      };
    default:
      return plansState;
  }
};

export default planReducer;
