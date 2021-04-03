import styles from './Header.module.css'

function Header({data}) {

    const addItem = (e) => {
        if(e.key==="Enter"){
            // For first addition create a local storage
            if(localStorage.getItem("testObject")===null){
                localStorage.setItem("testObject","[]");
                localStorage.setItem("lastIndex",0);
            }
            // Get last index
            const lastIndex = localStorage.getItem("lastIndex") + "";
            const addItemIndex = parseInt(lastIndex) + 1 ;
            
            var testObject = [{id:addItemIndex,"content":e.target.value,done:false}];

            // Get current localStorage data
            var getData =  JSON.parse(localStorage.getItem("testObject"));

            // Create objects for updating testObject / lastIndex
            var pushArray = getData.concat(testObject);

            // Sort pushArray by id
            pushArray.sort((a,b)=>(a.id>b.id)?1:-1);

            localStorage.setItem("testObject",JSON.stringify(pushArray));
            localStorage.setItem("lastIndex",addItemIndex);
            
            //Clear addItem input
            e.target.value="";

            // Send updated values to TodoApp
            data.setListLength(addItemIndex);
            data.setList(pushArray);
        }
    };

    const checkAllItems = () => {
        var getList = JSON.parse(localStorage.getItem("testObject"));

        getList.forEach(item=>item.done = !item.done);

        localStorage.setItem("testObject",JSON.stringify(getList));

        data.setList(getList);
    }

    const inputId = "input";
    return (
        <header className={"header"}>
                <label
                id={"checkallitems"}
                onClick={checkAllItems}
                className={styles.checkall}
                >❯</label>
                {/*add onClick value to convert all done values true/false */}
                <input
                id={inputId}
                onKeyDown={addItem}
                className={"new-todo"}
                placeholder={"What needs to be done?"}>
                </input>
        </header>
    )
}

export default Header
