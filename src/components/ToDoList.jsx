import React, {useState} from 'react'


const ToDoList = () => {
    const [goal, setGoal] = useState({
        goalName: "",
        isComplete: false
    })

    const [listOfGoals, setListOfGoals] = useState([])


    const changehandler = (e)=>{
        // console.log("CHANGE")
        setGoal({
            ...goal,
            [e.target.name]: e.target.value
        })
    }

    const submitGoal = (e)=>{
        e.preventDefault()
        // console.log("SUBMIT")
        setListOfGoals([...listOfGoals, goal])

        setGoal({
            goalName: "",
            isComplete: false
        })
    }

    const completeGoal = (e, i)=>{
        // console.log("COMPLETE")
        let [...newGoalList] = listOfGoals
        newGoalList[i].isComplete = !newGoalList[i].isComplete
        setListOfGoals(newGoalList)
    }

    const deleteGoal = (e,indx)=>{
        let updatedList = listOfGoals.filter((goal, i)=>{
            return i !== indx
        })

        setListOfGoals(updatedList)
    }
    
    return (
        <div>
            <h1>List of things to do: </h1>
            <form onSubmit={submitGoal}>
                <div className="form-group">
                    <label htmlFor="">Goal: </label>
                    <input onChange= {changehandler} type="text" name="goalName" value={goal.goalName} className="form-control"/>
                </div>
                <input type="submit" value="Add goal" className="btn btn-dark"/>
            </form>
            {
                listOfGoals.map((goalObj, i)=>{
                    return(
                        <div key ={i}>
                            <h4 style= {{textDecoration: goalObj.isComplete? "line-through": "none"}}>{goalObj.goalName} <input onClick={(e)=>completeGoal(e, i)} type="checkbox" /></h4>
                            <button onClick={(e)=>deleteGoal(e,i)}>Delete</button>
                            <hr></hr>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ToDoList;