import React, { useState } from 'react';
import './cssComponents/SearchSeries.css'
import Cards from './Cards'
import 'antd/dist/antd.css'
import { Input, Spin, Space } from 'antd';

const { Search } = Input;

const SearchSeries = () => {

    const [query, setQuery] = useState('');
    const [series, setSeries] = useState([]);
    //const [loading, setLoading] = useState(false);

    const searchSeries = async () => {
        //API Call
        const url = `http://api.tvmaze.com/search/shows?q=${query}`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            setSeries(data);
            //setLoading(true);
        } catch (err) {
            console.error(err);
        }

    }

    return (
        <>
            <form className="searchForm" >
                <Search className="input"
                    placeholder="Search series by name"
                    enterButton="Search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onSearch={searchSeries}
                    size="large"
                />
            </form>
            <div className="cardsList">
                {series.map(serie => (
                    <Cards serie={serie} key={serie.show.id} />
                ))}
            </div>
        </>
    )
}

export default SearchSeries
