import react,{Component} from "react";
import {Bar} from 'react-chartjs-2';

import {parse} from 'papaparse';
class Chartcsvstudy4 extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            Chartdata4 :{},
        }
    }
    setdata(csvdata){
        var d1 = csvdata.filter(data => data[`Atypical Appearance`] ==="1")
        var d2 = csvdata.filter(data => data[`Atypical Appearance`] ==="0")
        this.setState(
            {
                Chartdata4 :{
                    labels: ['0', '1'],
                    datasets: [{
                        label:'Atypical Appearance',
                        data: [d2.length,d1.length],
                        backgroundColor:[
                            'rgba(160, 167, 237, 0.8)',
                            'rgba(160, 167, 237, 0.8']
                    }]
                }
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
                        data={this.state.Chartdata4}
                    />
                </div>
            </div>
        )
    }
}
export default Chartcsvstudy4 ;