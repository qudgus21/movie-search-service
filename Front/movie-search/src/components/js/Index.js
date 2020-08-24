import React, { Component } from 'react';
import DetailSearch from './DetailSearch';
import NameSearch from './NameSearch';
import '../css/Index.css';

class Index extends Component {

    render() {
        return (
            <div>
                <div className="title">영화 찾기 서비스</div>
                <NameSearch />
                <DetailSearch />
            </div>
        )
    }
}


export default Index;