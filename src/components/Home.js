import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    const { gelenPostlar } = this.props;
    const postListesi = gelenPostlar.length ? (
      gelenPostlar.map((post) => {
        return (
          <div className="post card">
            <div className="card-content">
              <span className="cart-title red-text">{post.title}</span>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">şu an veri yok</div>
    );
    return (
      <div>
        <div className="home container">{postListesi}</div>
      </div>
    );
  }
}

//state içindeki verileri home componentine taşımamızı sağlayacak
const mapStatetoProps = (state) => {
  return {
    gelenPostlar: state.posts,
  };
  //state içindeki postları gelenPostlar objesine aktardık
};

export default connect(mapStatetoProps)(Home);
