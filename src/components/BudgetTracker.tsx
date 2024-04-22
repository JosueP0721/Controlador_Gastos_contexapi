import { useBudget } from "../hook/useBudget";
import AmountDisplay from "./AmountDisplay";
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export default function BudgetTracker() {

    const { state, dispatch, remainingBudget, totalExpense } = useBudget()

    const porcentage = +((totalExpense / state.budget) * 100).toFixed(2)

    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className=" flex justify-center">
                <CircularProgressbar
                    value={porcentage}
                    styles={buildStyles({
                        pathColor: porcentage === 100 ? '#DC2626' :'#3b82f6',
                        trailColor: '#f5f5f5',
                        textSize: 8,
                        textColor: '#3b82f6'
                    })}
                    text={`${porcentage}% Gastado`}
                />
            </div>

            <div className=" flex flex-col justify-center items-center gap-8">
                <button
                    type="button"
                    className=" bg-pink-600 w-full font-bold p-2 uppercase rounded-lg text-white"
                    onClick={() => dispatch({type: 'reset-app'})}
                >
                    Resetear App
                </button>
                <AmountDisplay 
                    label='Presupuesto'
                    amount={state.budget}
                />
                <AmountDisplay 
                    label='Disponible'
                    amount={remainingBudget}
                />
                <AmountDisplay 
                    label='Gastado'
                    amount={totalExpense}
                />
            </div>
        </div>
    )
}
