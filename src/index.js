import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'


const API_KEY = 'AIzaSyDKS4INBI3TYxDZak39NHimvF5Guh-uWmY';

// Create a new component. This component should produce some html
// Some HTML

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('learningfuze')
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });// this.setState({videos: videso}) -- only works if key and value are the same
        });
    }
//videos in the VideoList component is a prop from the parent in this case its app
    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
        return (
        <div>
            <SearchBar onSearchTermChange={videoSearch}/>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos}/>
        </div>
        );
    }
}


// Take this components generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));