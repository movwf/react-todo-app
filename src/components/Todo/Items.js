import {useState} from 'react'

function Items({data}) {
    const [inEditMode,setEditMode] = useState(false);

    const changeIsDone = (e) => {
        const index = parseInt(e.target.getAttribute("data"));
        const getList = JSON.parse(localStorage.getItem("testObject"));

        // Select item that wanted to change
        var selectItem = getList.filter(item=>item.id===index);
        selectItem[0].done = !selectItem[0].done;

        // Seperate list from selected from item
        var seperateList = getList.filter(item=>item.id!==index);
        var pushList = seperateList.concat(selectItem);
        
        // Sort pushList by id
        pushList.sort((a,b)=>(a.id>b.id)?1:-1);

        // Update localStorage
        localStorage.setItem("testObject",JSON.stringify(pushList));
        
        // update data.setList
        data.setList(pushList);
    };

    const delItem = (e) => {
        const index = parseInt(e.target.getAttribute("id"));
        var getList = JSON.parse(localStorage.getItem("testObject"));

        // Create newList after deletion
        var newList = getList.filter(item=>item.id!==index);

        // Sort pushList by id
        newList.sort((a,b)=>(a.id>b.id)?1:-1);

        // Push newList into localStorage
        localStorage.setItem("testObject",JSON.stringify(newList));

        // update data.setList
        data.setList(newList);

    };

    const editMode = (e) => {
        setEditMode(true);
    };

    const editItem = (e) => {
        if(e.key==="Enter"||e.key==="Escape"){
            const index = parseInt(e.target.getAttribute("id"));
            const getList = JSON.parse(localStorage.getItem("testObject"));

            // Select item that wanted to change
            var selectItem = getList.filter(item=>item.id===index);
            selectItem[0].content = e.target.value;

            // Seperate list from selected item
            var seperateList = getList.filter(item=>item.id!==index);
            var pushList = seperateList.concat(selectItem);
            
            // Sort pushList by id
            pushList.sort((a,b)=>(a.id>b.id)?1:-1);

            // Update localStorage
            localStorage.setItem("testObject",JSON.stringify(pushList));
            
            // update data.setList
            data.setList(pushList);

            setEditMode(false);
        }
    };

    return (
        <section className={"main"}>
                <ul className={"todo-list"}>
                    {data.list.map((item) => (
                        <li 
                            key={item.id}
                            className={item.done?"completed":""}>
                            <div className={"view"}>
                                <input
                                data={item.id}
                                checked={item.done}
                                onClick={changeIsDone}
                                className={"toggle"} 
                                type={"checkbox"} 
                                readOnly
                                ></input> 
                                
                                {inEditMode&&<input
                                className={"new-todo"}
                                id={item.id}
                                defaultValue={item.content}
                                onKeyDown={editItem}
                                >
                                </input>}

                                {!inEditMode&&<label
                                key={item.id}
                                onClick={editMode}
                                readOnly
                                >
                                {item.content}
                                </label>}
                                
                                {/* onClick = delTodoItem */}
                                <button
                                id={item.id}
                                onClick={delItem}
                                className={"destroy"}>
                                </button>
                            </div>            
                        </li>
                    ))}
                </ul>
            </section>
    )
}

export default Items
