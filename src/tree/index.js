import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Tree } from 'antd';
import { withRouter } from "react-router-dom";
import axios from 'axios';
const { DirectoryTree } = Tree;
const http = require('http');

class Treed extends Component {
  constructor(props){
    super(props);
    this.state = {
      Data: null,
    }
  }

  async componentDidMount(){
    await axios.get("http://localhost:5000/test")
    .then((rawdata)=>{
      this.setState({Data: rawdata.data}) ; 
    })
    .catch((error)=>{
      console.log(error)
    }) ;
    
  }
  onSelect = (keys, info) => {
    if(info.node.isLeaf){
      console.log(info.node.path);
      this.props.history.push('');
      this.props.history.push(`${info.node.path}`);
    }
    console.log('Trigger Select', keys, info);
  };

  onExpand = () => {
    console.log('Trigger Expand');
  };
  

  render(){
    return (
    <>
    {this.state.Data !== null &&<DirectoryTree
      multiple
      defaultExpandParent
      onSelect={this.onSelect}
      onExpand={this.onExpand}
      treeData={this.state.Data}
    />}
    </>
  );
};
};
const Treee = withRouter(Treed);
export default Treee ;