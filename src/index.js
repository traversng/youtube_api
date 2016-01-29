import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';


const API_KEY = 'AIzaSyDKS4INBI3TYxDZak39NHimvF5Guh-uWmY';

// Create a new component. This component should produce some html
// Some HTML

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos });// this.setState({videos: videso}) -- only works if key and value are the same
        });
    }
//videos in the VideoList component is a prop from the parent in this case its app
    render() {
        return (
        <div>
            <SearchBar/>
            <VideoList videos={this.state.videos}/>
        </div>
        );
    }
}


// Take this components generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));