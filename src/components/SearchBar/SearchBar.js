import React from 'react';
import './SearchBar.css';

/*const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count"
};*/

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        };
        this.sortByOptions = {
            "Best Match": "best_match",
            "Highest Rated": "rating",
            "Most Reviewed": "review_count"
        };
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    //work with function on line 59
    getSortByClass(sortByOption){
        if(this.state.sortBy === sortByOption){
            return 'active';
        } else {
            return '';
        }
    }

    //work with function on line 59
    handleSortByChange(sortByOption){
        this.setState({
            sortBy: sortByOption
        });
    }

    handleTermChange(e){
        this.setState({
            term: e.target.value
        })
    }

    handleLocationChange(e){
        this.setState({
            location: e.target.value
        })
    }

    handleSearch(e){
        this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy);
        e.preventDefault();
    }

    renderSortByOptions() {
        //Convert sortByOtions to an Array and map it, ["Best Match", "Highest Rated", "Most Reviewed"]
        return Object.keys(this.sortByOptions).map(sortByOption => {
            //Get value, vary by every element. ["best_match", "rating", "review_count"]
            let sortByOptionValue = this.sortByOptions[sortByOption];
            //Re-render className for React's setState function on line 36, whitch would execute after click this list
        return <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortByChange.bind(this,sortByOptionValue)}>{sortByOption}</li>
        });
    }

    test() {
        console.log(this);
        return 'red';
    }

    render() {
        return (
        <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                    {this.renderSortByOptions()}
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
                <input placeholder="Where?" onChange={this.handleLocationChange}/>
            </div>
            <div className="SearchBar-submit">
                <a onClick={this.handleSearch}>Let's Go</a>
            </div>
        </div>
        )
    }
};

export default SearchBar;
