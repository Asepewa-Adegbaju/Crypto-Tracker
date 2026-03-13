import { useEffect, useState } from "react";
import { fetchCryptos } from "../Api/CoinGecko";
import { CryptoCard } from "../Components/CryptoCard";
import { Siren } from "lucide-react";

export const Home = () => {
    const [cryptoList, setCryptoList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [viewMode, setViewMode] = useState("grid");
    const [sortBy, setSortBy] = useState("market_cap_rank");
    const [search, SetSearch] = useState(""); // Je state voor zoeken

    const fetchCryptoData = async () => {
        try {
            const data = await fetchCryptos();
            setCryptoList(data);
        } catch (err) {
            console.error("Error vinden van crypto: ", err);
        } finally {
            setIsLoading(false);
        }
    };

    const filterAndSort = () => {
        // Gebruik toLowerCase() zodat "BIT" ook "bit" vindt
        let filtered = cryptoList.filter((crypto) => 
            crypto.name.toLowerCase().includes(search.toLowerCase())
        );

        filtered.sort((a, b) => {
            switch (sortBy) {
                case "name":
                    return a.name.localeCompare(b.name);
                case "price":
                    return a.current_price - b.current_price;
                case "price_desc":
                    return b.current_price - a.current_price;
                case "change":
                    return b.price_change_percentage_24h - a.price_change_percentage_24h;
                case "market_cap":
                    return b.market_cap - a.market_cap;
                default:
                    return a.market_cap_rank - b.market_cap_rank;
            }
        });

        setFilteredList(filtered);
    };

    useEffect(() => {
        fetchCryptoData();
    }, []);

    // Voeg 'search' toe aan de dependencies!
    useEffect(() => {
        filterAndSort();
    }, [sortBy, cryptoList, search]);

    return (
        <div className="app">
            <header>
                <div className="Header">
                    <div className="header-content">
                        <div className="logo-section">
                            {/* Mooie combi van Siren en je nieuwe naam MarketBeacon */}
                            <h1 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#b8870b' }}>
                                <Siren color="#ff4500" /> MarketBeacon
                            </h1>
                            <p>Real-time koersen en marktdata voor al je favoriete crypto-assets.</p>
                        </div>
                        <div className="search-section">
                            {/* De input gefixt */}
                            <input 
                                type="text" 
                                placeholder="Search crypto's..." 
                                className="search-input" 
                                value={search}
                                onChange={(e) => SetSearch(e.target.value)} 
                            />
                        </div>
                    </div>
                </div>
            </header>

            <div className="controls">
                <div className="filter-group">
                    <label>Sort by:</label>
                    <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                        <option value="market_cap_rank">Rank</option>
                        <option value="name">Name</option>
                        <option value="price">Price (low to high)</option>
                        <option value="price_desc">Price (high to low)</option>
                        <option value="change">24h change</option>
                        <option value="market_cap">Market Cap</option>
                    </select>
                </div>
                <div className="view-toggle">
                    <button className={viewMode === "grid" ? "active" : ""} onClick={() => setViewMode("grid")}>Grid</button>
                    <button className={viewMode === "list" ? "active" : ""} onClick={() => setViewMode("list")}>List</button>
                </div>
            </div>

            {isLoading ? (
                <div className="loading">
                    <div className="spinner">
                        <p>Crypto data laden...</p>
                    </div>
                </div>
            ) : (
                <div className={`crypto-container ${viewMode}`}>
                    {filteredList.map((crypto, key) => (
                        <CryptoCard crypto={crypto} key={crypto.id || key} />
                    ))}
                </div>
            )}
        </div>
    );
};