import React, { Component } from 'react'

 class Video extends Component {
  render() {
    return(
      <div className='mt-2'>
        {
          this.props.videoItems.map((item) =>{
            return(
              <a className ="row mt-1" href={`https://www.youtube.com/watch?v=${item.id.videoId}`} target="_blank">
                <div className ="col-4">
                  <img alt="abc" src ={item.snippet.thumbnails.medium.url} />
                </div>
                <div className ="col-8 text-left">
                  <div className ="video_info">
                    <h2 className ="title">{item.snippet.title}</h2>
                    <p className ="description">{item.snippet.description}</p>
                    <span>View >></span>
                  </div>   
                </div>
              </a>
            );
          })
        }
      </div>
    );
  }
}

export default Video
