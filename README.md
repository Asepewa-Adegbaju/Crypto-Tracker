# MarketBeacon - Crypto Tracker

A modern, real-time cryptocurrency tracking application built with React and Vite. MarketBeacon provides users with up-to-date market data, search functionality, and intuitive visualization of cryptocurrency information.

## 🚀 Features

### Core Functionality

- **Real-time Data**: Fetches live cryptocurrency data from the CoinGecko API
- **Top 100 Cryptocurrencies**: Displays the most popular cryptocurrencies by market capitalization
- **Search Functionality**: Search cryptocurrencies by name with case-insensitive matching
- **Advanced Sorting**: Sort by rank, name, price (ascending/descending), 24h change, and market cap
- **Dual View Modes**: Toggle between grid and list views for optimal browsing
- **Detailed Crypto Cards**: Each card shows:
  - Cryptocurrency logo and name
  - Symbol and market rank
  - Current price with proper formatting
  - 24-hour price change percentage
  - Market capitalization
  - Trading volume

### User Interface

- **Responsive Design**: Clean, modern interface with intuitive navigation
- **Loading States**: Smooth loading indicators while fetching data
- **Color-coded Changes**: Positive changes in green, negative in red
- **Professional Styling**: Custom CSS with attention to detail

### Technical Features

- **React Router**: Client-side routing for navigation
- **Utility Functions**: Custom formatters for prices and market caps
- **Error Handling**: Proper error handling for API requests
- **Modular Architecture**: Well-organized component structure

## 🛠️ Technologies Used

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite (with Rolldown)
- **Routing**: React Router DOM 7.13.0
- **Icons**: Lucide React 0.563.0
- **API**: CoinGecko API v3
- **Styling**: Custom CSS
- **Package Manager**: pnpm
- **Linting**: ESLint with React-specific rules

## 📁 Project Structure

```
crypto-tracker/
├── public/
├── src/
│   ├── Api/
│   │   └── coinGecko.js          # API integration with CoinGecko
│   ├── Components/
│   │   └── CryptoCard.jsx        # Reusable crypto display component
│   ├── Pages/
│   │   ├── Home.jsx              # Main dashboard with crypto list
│   │   └── CoinDetails.jsx       # Individual coin details (placeholder)
│   ├── Utils/
│   │   └── formatter.js          # Price and market cap formatting utilities
│   ├── App.jsx                   # Main app component with routing
│   ├── main.jsx                  # App entry point
│   └── index.css                 # Global styles
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## 🚀 Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- pnpm package manager

### Installation Steps

1. **Clone the repository** (if applicable) or navigate to the project directory
2. **Install dependencies**:
   ```bash
   pnpm install
   ```
3. **Start the development server**:
   ```bash
   pnpm dev
   ```
4. **Open your browser** and navigate to `http://localhost:5173`

### Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build the project for production
- `pnpm preview` - Preview the production build locally
- `pnpm lint` - Run ESLint for code quality checks

## 🔧 Configuration

### API Configuration

The application uses the CoinGecko API with the following default settings:

- Currency: USD
- Order: Market cap descending
- Results per page: 100
- Page: 1

To modify API parameters, edit `src/Api/coinGecko.js`.

### Styling

Custom styles are located in `src/index.css`. The design uses:

- CSS custom properties for consistent theming
- Flexbox and Grid for responsive layouts
- Color schemes for positive/negative price changes

## 📊 API Usage

MarketBeacon integrates with the CoinGecko API to provide:

- Real-time cryptocurrency prices
- Market capitalization data
- 24-hour price change percentages
- Trading volume information
- Cryptocurrency metadata (logos, symbols, names)

**API Endpoint Used**: `https://api.coingecko.com/api/v3/coins/markets`

## 🔮 Future Enhancements

- **Coin Details Page**: Complete implementation of individual coin pages with charts and historical data
- **Favorites System**: Allow users to save favorite cryptocurrencies
- **Price Alerts**: Notification system for price changes
- **Portfolio Tracking**: User portfolio management features
- **Dark Mode**: Theme switching capability
- **Advanced Charts**: Integration with charting libraries for price history
- **Multiple Currencies**: Support for different fiat currencies
- **Real-time Updates**: WebSocket integration for live price updates

## 🤝 Contributing

This is a personal project, but feel free to fork and modify for your own use. Suggestions and improvements are welcome!

## 📄 License

This project is private and for personal use.

## 🙏 Acknowledgments

- **CoinGecko API**: For providing comprehensive cryptocurrency data
- **React Team**: For the excellent React framework
- **Vite Team**: For the fast build tool
- **Lucide**: For beautiful, consistent icons

---

Built with ❤️ using React and Vite
