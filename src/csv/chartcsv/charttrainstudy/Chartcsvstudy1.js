import react,{Component} from "react";
import {Bar} from 'react-chartjs-2';
import {parse} from 'papaparse';
class Chartcsvstudy1 extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            Chartdata1 :{},
        }
    }
    setdata(csvdata){
        console.log(csvdata);
        var a1 = csvdata.filter(data => data[`Negative for Pneumonia`] ==="1")
        var a2 = csvdata.filter(data => data[`Negative for Pneumonia`] ==="0")
        this.setState(
            {
                Chartdata1 :{
                    labels: ['0', '1'],
                    datasets: [{
                        label:'Negative for Pneumonia',
                        data: [a2.length,a1.length],
                        backgroundColor:[
                            'rgba(48, 172, 202, 0.8)',
                            'rgba(48, 172, 202, 0.8)']
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
                        data={this.state.Chartdata1}
                    /> 
                </div>
            </div>
        )
    }
}
export default Chartcsvstudy1 ;