export const Searchfilter = ({search,setSearch,filter,setFilter,country,setCountry})=>{
    const handleChange = (event)=>{
        event.preventDefault();
        setSearch(event.target.value);

    }
    const handleSelect = (event)=>{
        event.preventDefault();
        setFilter(event.target.value);
    }
    const sortCountries = (value)=>{
        const sortCountry = [...country].sort((a,b)=>{
            return value === 'asc'
            ? a.name.common.localeCompare(b.name.common)
            : b.name.common.localeCompare(a.name.common);
        });
        setCountry(sortCountry);
    }
    return(
        <>
        <section className="section-searchFilter container">
            <div>
                <input type="text" placeholder="search" value={search} onChange={handleChange}/>
            </div>

            <div><button onClick={()=>sortCountries("asc")}>Asc</button></div>
            <div><button onClick={()=>sortCountries("des")}>Des</button></div>
           
            <div>
                <select className="select-section" value={filter} onChange={handleSelect}>
                    <option value="All">All</option>
                    <option value="Africa">Africa</option>
                    <option value="Ameticas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </section>
        </>
    )
}