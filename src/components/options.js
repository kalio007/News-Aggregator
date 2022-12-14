import React from 'react';

export default function Options(){
    return(
        <div className='optionsArea'>
            <div className='optionButton'>
        <h3 className='home'>
            Home
        </h3>
        <h3 className='calender'>
            <a href= "https://coinmarketcal.com/en/" className='calender' >Calender</a>
        </h3>
        <h3 className='aboutUs'>
            About Us
        </h3>
        <h3>
            <a href= "https://medium.com/@kalio_" className='blog'>Blog</a>
        </h3>
        </div>

        <div className='socails'>
            <h3 className='socailhead'>Socials</h3>
            
                
                <div className='twitter'><img src="https://cdn4.iconfinder.com/data/icons/various-icons-2/476/YouTube.png" alt='youtube' className='twitter-img' /><a href='https://www.youtube.com/channel/UCGu6O9-vlYHWZT6SFIpp4Kw' className='twitterr'>Youtube</a></div>
                <div className='twitter'><img src="https://cdn3.iconfinder.com/data/icons/social-network-flat-3/100/Discord-256.png" alt='discord' className='twitter-img' /><a href='https://twitter.com/Kalio_Prince' className='twitterr'>Discord</a></div>
        </div>

        </div>
    )

}