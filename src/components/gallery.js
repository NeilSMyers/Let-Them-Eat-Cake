import React, { Component } from 'react';
import { connect, dispatch } from 'react-redux';
import { fetchCake } from '../actions';

class Gallery extends Component {

    constructor(props) {
        super(props)

        this.renderCake = this.renderCake.bind(this);
    }

    componentDidMount() {
        this.props.fetchCake()
    }

    renderCake(cake) {
        return (
            <div key={cake.title} className="cakes-container">
                <div className="cakes">
                    <img src={cake.img}/>
                    {/* <img src="http://via.placeholder.com/350x150"/> */}
                    <div>Title: {cake.title}</div>
                    <div>Description: {cake.description}</div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.props.cakes.map(this.renderCake)}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { cakes: state.cakes }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCake: () => {
            dispatch(fetchCake())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);