import React, { Component } from 'react';
import { FaSearch } from "react-icons/fa";
import '../css/NameSearch.css';

class NameSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }

    handleChange = e => {
        this.setState({
            name: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        //전송
    }

    render() {
        return (
            <form className="name-search" onSubmit={this.handleSubmit}>
                <input className="name-input" placeholder="찾고 싶은 영화의 이름을 입력하세요" onChange={this.handleChange} />
                <span onClick={this.handleSubmit}>
                    <FaSearch className="name-img" />
                </span>
            </form>
        )
    }
}

export default NameSearch;