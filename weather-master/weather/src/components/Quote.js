import axios from "axios";
import React from 'react';

class Quote extends React.Component
{
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
            <div className="App">
                <div className="header">
                    <h1>Quote of the Day</h1>
                    <p>{this.state.qInfo.quotes}</p>
                    <p>-{this.state.qInfo.author}</p>
                </div>
            </div>
        );
    }

}

export default Quote;
