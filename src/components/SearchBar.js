import React,{useState} from 'react';

function SearchBar(props) {
    const [ipaddress,setipaddress] = useState("");
    function setIp(ev) {
        const val = ev.target.value;
        setipaddress(val);
    }
    function submitHandler(ev) {
        ev.preventDefault();
        props.setIpAddress(ipaddress);
    }
    return (
        <form onSubmit={submitHandler} className="search-wrapper">
            <input 
                type="text" 
                name="ipaddress" 
                className="search-bar" 
                onChange={setIp} 
                value={ipaddress}
                placeholder="Search for any IP ddress or domain"
                >

            </input>
            <button type="submit" className="search-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" /></svg>
            </button>
        </form>
    )
}

export default SearchBar
