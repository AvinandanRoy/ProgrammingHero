import './ToDo.css'

const ToDo =({taskname , taskDetails, isdone}) =>{
    if (isdone === 'true'){
        return(
            <div className='parent'>
                <h3 className='first'>{taskname} : </h3>
                <h4 className='second'>{taskDetails}</h4>
                
                <h3 className='last'>Finished : {taskname}</h3>
            </div>
        )
    }
    else{
        return(
            <div className='parent'>
                <h3 className='first'>{taskname} : </h3>
                <h4 className='second'>{taskDetails}</h4>
                
                <h3 className='last'>Work On : {taskname}</h3>
            </div>
        )

    }
}

export default ToDo;