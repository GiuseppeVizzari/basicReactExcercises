import React, {useState} from "react";

function ExpandableUL(){
    const [num, setNum] = useState(0);
    const [itemList, setItemList] = useState([]);

    return (
        <p>
            <button onClick={() => {
                setNum(num + 1);
                setItemList(itemList.concat([<li>List item {num}</li>]))
            }}>Add list item</button>
            <button onClick={() => {
                if(num>0){
                    setNum(num - 1);
                    let tmpList = itemList;
                    tmpList.pop();
                    setItemList(tmpList);
                }
            }}>Remove list item</button>
            <ul>
                {itemList}
            </ul>
        </p>
    );

}

export default ExpandableUL;