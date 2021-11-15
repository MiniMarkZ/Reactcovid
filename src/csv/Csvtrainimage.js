import react,{Component} from "react";
import axios from 'axios';
import './Chart.css';
import 'antd/dist/antd.css';
import { Table } from 'antd';

import Chartcsvim1 from "./chartcsv/charttrainimage/Chartcsvim1";
import Chartcsvim2 from "./chartcsv/charttrainimage/Chartcsvim2";
import Chartcsvst from "./chartcsv/charttrainimage/Chartcsvst";
import Chartcsvsumim from "./chartcsv/charttrainimage/Chartcsvsum";



class Csvsample extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            columns : null,
            charttop : [],
            
        }
    }
    setdata(csvdata){
    
      var testtop = [{
            "id" : <Chartcsvsumim />,
            "boxes" : <Chartcsvim1 />,
            "label" : <Chartcsvim2 />,
            "StudyInstanceUID" : <Chartcsvst /> ,
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
                  title: "boxes",
                  dataIndex: "boxes",
                  sorter: {
                    compare: (a, b) => a[`boxes`].length - b[`boxes`].length,
                  },
                },
                {
                    title: "label",
                    dataIndex: "label",
                    sorter: {
                      compare: (a, b) => a[`label`].length - b[`label`].length,
                    },
                  },
                  {
                    title: "StudyInstanceUID",
                    dataIndex: "StudyInstanceUID",
                    sorter: {
                      compare: (a, b) =>  a.StudyInstanceUID.localeCompare(b.StudyInstanceUID)
                    },
                  },
          ]
      })
        
    }

    async componentDidMount(){
      await axios.get("http://localhost:5000/csvdata/train_image_level.csv")
      .then((rawdata)=>{
        this.setdata(rawdata.data)
      })
      .catch((error)=>{
        console.log(error)
      }) ;
      }
    render(){
        return(
            <div className="container-chart" style={{alignContent : 'center',justifyContent : 'center',marginRight:'auto'}}>
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
export default Csvsample ;