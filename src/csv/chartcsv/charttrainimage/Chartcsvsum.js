import react,{Component} from "react";
import {parse} from 'papaparse';
import './font.css';
class Chartcsvsumim extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            Chartdata1 :null,
        }
    }
    setdata(csvdata){
        var c1 =  csvdata.filter(data => data.id)
        this.setState(
            {
                Chartdata1: c1.length,
        })
        
    }
    
    componentDidMount(){
        parse("http://localhost:5000/csv/train_image_level.csv", {
            download: true,
            header : true ,
            complete : (e)=>{
                this.setdata(e.data);
            }
        })
      }
   
    render(){
        return(
            <div  style={{alignContent : 'center',justifyContent : 'center',marginLeft:'13vh',marginRight:'auto'}}>
            <div className="fontsize" style={{marginLeft:'25px'}}>
                    {`${this.state.Chartdata1} `}
                </div>
                <div className='bar' >
                    unique values
                </div>
            </div>
        )
    }
}
export default Chartcsvsumim ;