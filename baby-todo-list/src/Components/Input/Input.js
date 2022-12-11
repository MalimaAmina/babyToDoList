

function AddItem({ handleChange }) {
	return (
		<input
			type='text'
			placeholder='Add task...'
			className='task-bar'
			id='task-bar'
			onChange={handleChange}
		></input>
	);
}

export default AddItem;