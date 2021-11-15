import react,{Component} from "react";
import {Bar} from 'react-chartjs-2';
import {parse} from 'papaparse';
class Chartcsvstudy2 extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            Chartdata2 :{},

        }
    }
    setdata(csvdata){
        console.log(csvdata);
       
        var b1 = csvdata.filter(data => data[`Typical Appearance`] ==="1")
        var b2 = csvdata.filter(data => data[`Typical Appearance`] ==="0")
       
        this.setState(
            {
                Chartdata2 :{
                    labels: ['0', '1'],
                    datasets: [{
                        label:'Typical Appearance',
                        data: [b2.length,b1.length],
                        backgroundColor:[
                            'rgba(222, 111, 221, 0.8)',
                            'rgba(222, 111, 221, 0.8)']
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
                        data={this.state.Chartdata2}
                    /> 
                </div>
            </div>
        )
    }
}
export default Chartcsvstudy2 ;