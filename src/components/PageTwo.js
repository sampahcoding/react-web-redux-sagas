import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listPhotos } from '../reducers/PhotosReducer';

class PageTwo extends Component {
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
  }

  componentDidMount() {
    this.props.listPhotos(this.state.params);
  }

  item(data, index) {
    return <p key={index}>asdalskds</p>;
  }

  render() {
    return (
      <div>
        page number: {this.props.match.params.number}
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
    loading: true
  };
};

const mapDispatchToProps = {
  listPhotos
};

export default connect(mapStateToProps, mapDispatchToProps)(PageTwo);
