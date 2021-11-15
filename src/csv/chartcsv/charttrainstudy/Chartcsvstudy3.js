import react,{Component} from "react";
import {Bar} from 'react-chartjs-2';

import {parse} from 'papaparse';
class Chartcsvstudy3 extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            Chartdata3 :{},
        }
    }
    setdata(csvdata){
        console.log(csvdata);
        var c1 = csvdata.filter(data => data[`Indeterminate Appearance`] ==="1")
        var c2 = csvdata.filter(data => data[`Indeterminate Appearance`] ==="0")
        this.setState(
            {
                
                
                Chartdata3 :{
                    labels: ['0', '1'],
                    datasets: [{
                        label:'Indeterminate Appearance',
                        data: [c2.length,c1.length],
                        backgroundColor:[
                            'rgba(114, 111, 222, 0.8)',
                            'rgba(114, 111, 222, 0.8)']
                    }]
                },
            }
        )
        
    }
    componentDidMount(){
        parse("http://localhost:5000/csv/train_study_level.csv", {
            download: true,
            header : true ,
            complete : (e)=>{
                this.setState({
                    table : e.data
                })
                this.setdata(e.data);
            }
        })
      }
    render(){
        return(
            <div className="container-sample" > 
                <div >
                    <Bar
                        data={this.state.Chartdata3}
                    /> 
                </div>
            </div>
        )
    }
}
export default Chartcsvstudy3 ;