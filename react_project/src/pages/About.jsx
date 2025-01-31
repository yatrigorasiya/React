
import countrydata from '../API/countrydata.json';

export const About = ()=>{
   
 
    return(<>
    <section className='section-about container'>
        <h2 className='container-title'>  
            Here are the Interesting Facts
        <br />
        we’re proud of</h2>
        <div className='gradient-cards'>

            {
                countrydata.map((currdata)=>{
                    const{id,countryName,capital,population,interestingFact} = currdata;
                    return(
                        <div className='card' key={id}>
                    <div className='container-card bg-blue-box'>
                    <p className='card-title'>{countryName}</p>
                    <p>
                        <span className='card-description'>Capital:</span>{capital}
                    </p>
                    <p>
                        <span className='card-description'>population:</span>{population}
                    </p>
                    <p>
                        <span className='card-description'>interestingFact:</span>{interestingFact}
                    </p>
                   
                </div>
            </div>

                    )
                })
            }
            
        </div>
    </section>
    
    </>)
}