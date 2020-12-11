import React from 'react';
import 'antd/dist/antd.css'
import { Input } from 'antd';
const { Search } = Input;


//<Input.Search className="searchbtn" type="submit">Search</Input.Search>
//<Input className="input" type="text" placeholder="Search series by name" enterButton="Search"></Input>

const SearchSeries = () => {

    const searchSeries = async () => {
        //API Call
        const url = 'http://api.tvmaze.com/search/shows?q=simpsons';

        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
        }catch(err){
            console.error(err);
        }
        
    }
    return (
        <form className="searchForm" >
            <Search className="input"
            placeholder="Search series by name"
            enterButton="Search"
            onSearch={searchSeries}
            size="large"                 
        />
        </form>
    )
}

export default SearchSeries
