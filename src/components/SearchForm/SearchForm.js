import './SearchForm.css'
export default function SearchForm() {
	
	return <form className="search-form search-form-container">
		<input type="search" placeholder={"Search"}/>
		<button type={'submit'}>
			<i className="fa fa-search"></i>
		</button>
	</form>
}