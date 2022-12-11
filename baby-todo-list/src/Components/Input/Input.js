

function AddItem({ handleChange }) {
	return (
		<input
			type='text'
			placeholder='Add task...'
			className='search-bar'
			id='search-bar'
			onChange={handleChange}
		></input>
	);
}

export default AddItem;