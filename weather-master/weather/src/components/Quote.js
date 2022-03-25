import axios from "axios";
import React from 'react';

class Quote extends React.Component
{
    // iniitial state of the class
    state =
    {
        qInfo:
        {
            quotes : '',
            author : ''
        }
    }

    componentDidMount()
    {
        // Gets the quote and the author from the API
        axios.get(`https://quotes.rest/qod?language=en`).then(res =>
        {
            let q = 
            {
    
                quotes : res.data.contents.quotes[0].quote,
                author : res.data.contents.quotes[0].author
            }

            this.setState({qInfo: q});
            console.log(this.state.qInfo);
        })
    }

    render()
    {
        return(
            // Displays the quote and the author
            <div className="App">
                <div className="header">
                    <p id = "quoteheading">Quote of the Day</p>
                    <p className="quote-box">{this.state.qInfo.quotes}</p>
                    <p className="quote-box-author">-{this.state.qInfo.author}</p>
                </div>
            </div>
        );
    }

}

export default Quote;
