import react,{Component} from "react";
import {Bar , line , Pie} from 'react-chartjs-2';
import {parse} from 'papaparse';

class Chartcsv1 extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            Chartdata1 :null,
            Chartdata2 :null
        }
    }
    setdata(csvdata){
        var c1 = csvdata.filter(data => data.PredictionString ==="none 1 0 0 1 1")
        var c2 = csvdata.filter(data => data.PredictionString ==="negative 1 0 0 1 1")
        var sum = c1.length + c2.length
        var c1per = Math.ceil((c1.length/sum)*100);
        var c2per = 100-Math.ceil(c1per);
        this.setState(
            {
                Chartdata1: c1per,
                Chartdata2: c2per
        })
        
    }
    
    componentDidMount(){
        parse("http://localhost:5000/csv/sample_submission.csv", {
            download: true,
            header : true ,
            complete : (e)=>{
                this.setdata(e.data);
            }
        })
      }
   
    render(){
        return(
            <div className='bar'>
                <div>
                    {`none 1 0 0 1 1 ${this.state.Chartdata1}%`}
                </div>
                <div>
                    {`negative 1 0 0 1 1 ${this.state.Chartdata2}%`}
                </div>
            </div>
        )
    }
}
export default Chartcsv1 ;