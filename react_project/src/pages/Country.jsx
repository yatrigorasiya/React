import { useTransition,useEffect, useState } from "react";
import { getCountryData } from "../API/postapi";
import { Countrycard } from "../components/layout/Countrycard";
import { Loader } from "../components/UI/Loader";
import { Searchfilter } from "../components/UI/Searchfilter";

export const Country = ()=>{

    const [isPending, startTransition] = useTransition();
    const[country,setCountry]=useState([]);
    const[search,setSearch] = useState();
    const[filter,setFilter] = useState("All");


    useEffect(() => {
        startTransition(async()=>{
          const res= await getCountryData()
        //   console.log(res);
        setCountry(res.data);
        })
     
    }, []);

    if(isPending){
        return <Loader/>
    }
    // console.log(search,filter)

    const searchCountry = (countrydata)=>{
        if(search){
            return countrydata.name.common.toLowerCase().includes(search.toLowerCase())
        }
        return countrydata;

    }

    const filterRegion = (countrydata)=>{
        if(filter === 'All') return countrydata;
        return countrydata.region === filter;

    }

    const filterdata = country.filter((countrydata)=>searchCountry(countrydata) && filterRegion(countrydata))


    // const searchdata = country.filter((currdata)=>{
    //     currdata.name.toLowerCase().includes(search.toLowerCase());
    // })
    return(<>
  <section className="country-section">
    <Searchfilter
    search={search}
    setSearch={setSearch}
    filter={filter}
    setFilter={setFilter}
    country={country}
    setCountry={setCountry}

    />
    
    <ul className="grid grid-four-cols">
        {
            filterdata.map((currdata,index)=>{
                return (
                    <Countrycard currdata={currdata} key={index}/>
                )
            })
        }
    </ul>
  </section>
    </>)
}