//Example for Destructuring:
// const person = {
//     name: 'John',
//     age : 45,
//     location : 'New York'
// }
// const {name, age,location} = person;

function Search({searchTerm,setSearchTerm}) //Instead of using (props) we have destructured the props and used them
{
    return (
        <div className="text-white text-3xl">
            <div className="search">
                <div>
                    <img src="SearchIcon.svg" alt="Search" />

                    <input
                    type="Text"
                    placeholder="Search thorugh Movies"
                    value={searchTerm}
                    onChange={
                        (e) => setSearchTerm(e.target.value)
                    }
                    />
                </div>
            </div>
        </div>
    )
}

export default Search;