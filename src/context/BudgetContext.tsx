import { Dispatch, PropsWithChildren, createContext, useMemo, useReducer } from "react"
import { BudgetActions, BudgetState, budgetReducer, initialState } from "../reducers/budget-reducer"

type BudgetContextProps = {
    state: BudgetState
    dispatch: Dispatch<BudgetActions>
    totalExpense: number
    remainingBudget: number
}

export const BudgetContext = createContext<BudgetContextProps>(null!)

export const BudgetProvider = ({children} : PropsWithChildren) => {
    const [state, dispatch] = useReducer(budgetReducer, initialState)
    const totalExpense = useMemo( () => state.expenses.reduce((total, expense) => expense.amount + total, 0) , [state.expenses])
    const remainingBudget = state.budget - totalExpense

    return (
        <BudgetContext.Provider
            value={{
                state,
                dispatch,
                totalExpense,
                remainingBudget
            }}
        >
            {children}
        </BudgetContext.Provider>
    )
}