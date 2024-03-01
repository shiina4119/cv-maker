export default function schoolListReducer(list, action) {
    if (action.type === 'change') {
	let newList = [...list];
        newList[action.index][action.event.target.name] = action.event.target.value;
	return newList;
    }
    else if (action.type === 'add') {
	return [
	    ...list,
	    {
		name: "",
		details: "",
		location: "",
		start: "",
		end: "",
	    }
	]
    }
    else if (action.type === 'delete') {
	let newList = [...list]
	newList.splice(action.index, 1);
	return newList;
    }
    else {
	throw Error('Unknown action: ' + action.type);
    }
}
