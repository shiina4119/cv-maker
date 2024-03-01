export default function reducer(list, action) {
    if (action.type === "change") {
	let newList = [...list];
        newList[action.index][action.event.target.name] = action.event.target.value;
	return newList;
    }
    else if (action.type === "add") {
	return [...list, action.newObj]
    }
    else if (action.type === "delete") {
	let newList = [...list]
	newList.splice(action.index, 1);
	return newList;
    }
    else {
	throw Error("Unknown action: " + action.type);
    }
}
