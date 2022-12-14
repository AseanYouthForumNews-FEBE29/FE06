import axios from 'axios';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AseanCard from '../components/AseanCard';
import { useParams } from "react-router-dom";
import React from "react";

const URL = "https://ayfnfebe29.up.railway.app/news/all/country/"

function Asean(){
    const params = useParams();
    const {id} = params
    console.log(id)
    const [isLoading, setIsLoading] = useState(true);
    const [country, setCountry] = useState([]);
  
        
    useEffect(() => {
        axios.get(URL+id).then((response) => {
          setCountry(response.data);
          setIsLoading(false);
        });
      }, []);

      console.log(country);
    
    return(
        <>
            <Navbar/>
            <div className="card mb-3 mx-auto" >
            <div className="mx-auto row g-0">
            {country.map((asean) => {
                return <div className='col-md-4 mt-2 img-fluid rounded-start col-md-8 card-body card-title card-text' key={asean.id}>
                    <AseanCard
                        id={asean.id}
                        image={asean.image}
                        title={asean.title}
                        summary={asean.summary}
                        categoryName={asean.Category.name}
                        createdAt={asean.createdAt}
                    />
                </div>
            })}
            </div>
            </div>
          <Footer/>
        </>
    )
}

export default Asean