
import {formatPrice,formatMarketCap} from "../Utils/formatter"
export const CryptoCard = ({crypto}) =>{
    return <div className="crypto-card">
        <div className="crypto-header">
            <div className="crypto-info">
                <img src={crypto.image} alt={crypto.name} />
                <div><h3>{crypto.name}</h3></div>
                <p className="symbol">{crypto.symbol.toUpperCase()}</p>
                <span className="rank">#{crypto.market_cap_rank}</span>
            </div>
        </div>
        <div className="crypto-price">
            <p className="price">{formatPrice(crypto.current_price)}</p>
            <p className={`change ${crypto.price_change_percentage_24h >=0 ? "positive" : "negative"}`}>{Math.abs(crypto.price_change_percentage_24h)}</p>
            {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}
        </div>
        <div className="stat">
            <div className="crypto-stats">
                <div className="stat">
                    <span className="stat-label">Markt Cap</span>
                    <span className="stat-value">${formatMarketCap(crypto.market_cap)}</span>
                </div>
                <div className="stat">
            <div className="crypto-stats">
                <div className="stat">
                    <span className="stat-label">Volume</span>
                    <span className="stat-value">${formatMarketCap(crypto.total_volume)}</span>
                </div>    
            </div>
        </div>
                
            </div>
        </div>
    </div>

}