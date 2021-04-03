import {useState} from 'react';

function Footer({data}) {
    const [selected,setSelected] = useState("all");

    // All selected update list
    const selectAll = () =>{
        const getData = JSON.parse(localStorage.getItem("testObject"));

        setSelected("all")

        data.setList(getData);
    };
    // Active selected update list
    const selectActive = () =>{
        const getData = JSON.parse(localStorage.getItem("testObject"));

        // Get only not done items
        var filteredList = getData.filter(item=>item.done===false);

        data.setList(filteredList);
        setSelected("active")
    };
    // Completed selected update list
    const selectCompleted = () =>{
        const getData = JSON.parse(localStorage.getItem("testObject"));

        //Get only completed items
        var filteredList = getData.filter(item=>item.done===true);


        data.setList(filteredList);
        setSelected("completed")
    };

    // Clear completed
    const clearCompleted = () => {
        const getData = JSON.parse(localStorage.getItem("testObject"));

        // Get only not done items
        var filteredList = getData.filter(item=>item.done===false);

        localStorage.setItem("testObject",JSON.stringify(filteredList));
        data.setList(filteredList);
    };

    return (
        <footer className={"footer"}>
            <span className={"todo-count"}>
                <strong>{data.isFooterVisible?data.activeCount:""} </strong>
                items left
            </span>
            <ul className={"filters"}>
                <li>
                    <label 
                    className={selected==="all"?"selected":""}
                    onClick={selectAll}
                    >
                    All</label>
                </li>
                <li>
                    <label
                    className={selected==="active"?"selected":""}
                    onClick={selectActive}
                    >
                    Active</label>
                </li>
                <li>
                    <label 
                    className={selected==="completed"?"selected":""}
                    onClick={selectCompleted}
                    >Completed</label>
                </li>
		    </ul>
            <button onClick={clearCompleted} className={"clear-completed"}>
			    Clear completed
		    </button>
        </footer>
    )
}

export default Footer
