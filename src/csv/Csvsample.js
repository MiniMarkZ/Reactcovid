import react,{Component} from "react";
import axios from 'axios';
import './Chart.css';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import Chartcsv1 from "./chartcsv/chartsample/Chartcsv1";
import Chartcsvsum from "./chartcsv/chartsample/Chartcsvsum";

class Csvsample2 extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            columns : null,
            charttop : [],
            
        }
    }
    setdata(csvdata){
      var testtop = [{
            "id" : <Chartcsvsum />,
            "PredictionString" : <Chartcsv1 />,
      }]
      testtop = testtop.concat(csvdata);
      this.setState({
          charttop : testtop,
          columns : [
              {
                  title: 'id',
                  dataIndex: 'id',
                  sorter: {
                    compare: (a, b) =>  a.id.localeCompare(b.id)
                  },
                },
                {
                  title: "PredictionString",
                  dataIndex: "PredictionString",
                  sorter: {
                    compare: (a, b) => a[`PredictionString`].length - b[`PredictionString`].length,
                  },
                },
          ]
      })
        
    }

    async componentDidMount(){
      await axios.get("http://localhost:5000/csvdata/sample_submission.csv")
      .then((rawdata)=>{
        this.setdata(rawdata.data)
      })
      .catch((error)=>{
        console.log(error)
      }) ;
      }
    render(){
        return(
            <div className="container-chart" style={{alignContent : 'center',justifyContent : 'center'}}>
              <div className="table">
                <Table 
                  columns={this.state.columns}
                  dataSource={this.state.charttop}
                  tableLayout="fixed"
                  onChange={(sorter) => {
                    console.log('params', sorter);
                  }}
                />
              </div>
            </div>
        )
    }
}
export default Csvsample2 ;