import React, { Component } from 'react';
import Select from 'react-select';
import '../css/DetailSearch.css';

const service = [
    { value: '넷플릭스', label: '넷플릭스' },
    { value: '왓챠', label: '왓챠' },
    { value: '웨이브', label: '웨이브' }
]

const genre = [
    { value: '범죄', label: '범죄' },
    { value: '로맨스', label: '로맨스' },
    { value: '드라마', label: '드라마' }
]



class DetailSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            servcie: '',
            genre: ''
        };
    }

    handleService = e => {
        this.setState({
            service: e.value
        })
    }

    handleGenre = e => {
        this.setState({
            genre: e.value
        })
    }

    handleClick = e => {
        //전송
        console.log(this.state.service);
        console.log(this.state.genre);
    }

    render() {
        return (
            < div >
                <div className="detail-select">
                    <Select className="select-item" options={service} placeholder="---- 서비스 선택 ----" onChange={this.handleService} />
                    <Select className="select-item" options={genre} placeholder="---- 장르 선택 ----" onChange={this.handleGenre} />
                </div>
                <button onClick={this.handleClick}>검색</button>
            </div>
        )
    }
}

export default DetailSearch;