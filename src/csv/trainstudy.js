import react,{Component} from "react";
import axios from 'axios';
import './Chart.css';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import Chartcsvstudy2 from "./chartcsv/charttrainstudy/Chartcsvstudy2";
import Chartcsvstudy3 from "./chartcsv/charttrainstudy/Chartcsvstudy3";
import Chartcsvstudy4 from "./chartcsv/charttrainstudy/Chartcsvstudy4";
import Chartcsvstudy1 from "./chartcsv/charttrainstudy/Chartcsvstudy1";
import Chartcsvst from "./chartcsv/charttrainimage/Chartcsvst";

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
            "id" : <Chartcsvst />,
            "Negative for Pneumonia" : <Chartcsvstudy1 />,
            "Typical Appearance" : <Chartcsvstudy2 /> ,
            "Indeterminate Appearance" : <Chartcsvstudy3 />,
            "Atypical Appearance" : <Chartcsvstudy4 />,
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
                    title: "Negative for Pneumonia",
                    dataIndex: "Negative for Pneumonia",
                    sorter: {
                      compare: (a, b) => a[`Negative for Pneumonia`] - b[`Negative for Pneumonia`],
                    },
                  },
                {
                    title: "Typical Appearance",
                    dataIndex: "Typical Appearance",
                    sorter: {
                      compare: (a, b) => a[`Typical Appearance`] - b[`Typical Appearance`],
                    },
                  },
                  {
                    title: "Indeterminate Appearance",
                    dataIndex: "Indeterminate Appearance",
                    sorter: {
                      compare: (a, b) => a[`Indeterminate Appearance`] - b[`Indeterminate Appearance`],
                    },
                  },
                  {
                    title: "Atypical Appearance",
                    dataIndex: "Atypical Appearance",
                    sorter: {
                      compare: (a, b) => a[`Atypical Appearance`] - b[`Atypical Appearance`],
                    },
                  },
          ]
      })
        
    }

    async componentDidMount(){
      await axios.get("http://localhost:5000/csvdata/train_study_level.csv")
      .then((rawdata)=>{
        this.setdata(rawdata.data)
      })
      .catch((error)=>{
        console.log(error)
      }) ;
      }
    render(){
        return(
            <div className="container-chart" style={{alignContent : 'center',justifyContent : 'center',marginRight:'auto'}} >
              
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