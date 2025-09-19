import './Home.css'
import '../../components/button.css'

export default function Home() {

    return (
        <div className='homePage'>
            <div className='homePage-left'>
                <h1>Track, organize, and understand your spending</h1>
                <article>
                    Log your expenses with ease, and we’ll instantly organize them by purpose — whether daily, monthly, or yearly. Gain a clear view of your spending habits, spot patterns, and start making smarter financial decisions with confidence.
                </article>
                <button className='button'>Get Started</button>
            </div>
            <div className='homePage-right'>
                    <p>Expenses Tracking</p>
                    <input type="text" name="searching" id="searchBar" placeholder='SEARCHING...' className='searchType'/>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
            </div>
        </div>
    )
}