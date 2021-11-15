import axios from 'axios'
import React from 'react'
import { Component } from 'react'
import './new/newapp.css'
import { Table } from 'antd';
import 'antd/dist/antd.css';

class Tablenew extends Component {
    constructor(props){
        super(props)
        this.state= {
            columns : null,
            datatable : [],
            sum : 0,
        }
    }
    setdata(data){
        var sum = data.filter(data=>data.id)
        var suml = sum.length
        this.setState({
           sum : suml,
            columns :(
                [
                    {
                      title: 'id',
                      dataIndex: 'id',
                    },
                    {
                      title: 'Negative for Pneumonia',
                      dataIndex: 'Negative for Pneumonia',
                      sorter: {
                        compare: (a, b) => a.chinese - b.chinese,
                      },
                    },
                    {
                        title: 'Typical Appearance',
                        dataIndex: 'Typical Appearance',
                        sorter: {
                          compare: (a, b) => a.chinese - b.chinese,
                        },
                      },
                      {
                        title: 'Indeterminate Appearance',
                        dataIndex: 'Indeterminate Appearance',
                        sorter: {
                          compare: (a, b) => a.chinese - b.chinese,
                        },
                      },
                      {
                        title: 'Atypical Appearance',
                        dataIndex: 'Atypical Appearance',
                        sorter: {
                          compare: (a, b) => a.chinese - b.chinese,
                        },
                      },
                ]
            )}
        )
        this.setState({
            datatable : data
        })
        
    }
    componentDidMount(){
     axios.get("http://localhost:5000/csvdata/train_study_level.csv")
     .then((rawdata)=>(
        this.setdata(rawdata.data)
     ))
    }
    render(){
        return(
            
          <div>
            <div> asdasd {this.state.sum}</div>
              <Table columns={this.state.columns} 
              dataSource={this.state.datatable} 
               /> 
        </div>
        );
    }
}

export default Tablenew ;