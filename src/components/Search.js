import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listPhotos } from '../reducers/PhotosReducer';

class Search extends Component {
  constructor(props) {
   super(props);
   this.state = {
     init: 0,
     params: {
       q: '',
       page: 1,
       infinite: false
     }
   };
   this.updateQ = this.updateQ.bind(this);
  }

  componentDidMount() {
    this.props.listPhotos(this.state.params);

  }

  updateQ(e) {
    this.setState({params: { q: e.target.value }});
    this.props.listPhotos(this.state.params);
  }

  item(data, index) {
    return <p key={index}>{data.title}</p>;
  }

  render() {
    console.log(this.props);
    const { search } = this.props.location;
    const params = new URLSearchParams(search);
    const page = params.get('page'); // bar
    return (
      <div style={this.props.loading === true ? style.loading: style.loaded}>
        page number: { page }
        <br/>
        <input type="text" id="q" name="q" onChange={ this.updateQ } value={this.state.q} />
        {this.props.photos.map(this.item)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  let storedPhotos = [];
  if (state.photos.datas.length > 0) {
    storedPhotos = state.photos.datas.map(photo => ({ key: photo.id, ...photo }));
  }
  return {
    photos: storedPhotos,
    loading: state.photos.loading
  };
};

const style = {
  loading: {
    opacity: 0.2,
    background: "white"
  }
};

const mapDispatchToProps = {
  listPhotos
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);