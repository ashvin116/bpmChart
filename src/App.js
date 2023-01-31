import "./App.css";
import LineChart from "./components/LineChart";
import { UserData } from "./Data";

function App() {
  // console.log(UserData[0].data[0].heart_rate_data.detailed.hr_samples);
  const hr_samples = UserData[0].data[0].heart_rate_data.detailed.hr_samples
  const hrv_samples_sdnn = UserData[0].data[0].heart_rate_data.detailed.hrv_samples_sdnn

  console.log(hrv_samples_sdnn,"hrv_samples_sdnn");

  const Chart = {
    labels: hr_samples.map((data) => data.timestamp),
    datasets: [
      {
        label: "bpm",
        data: hr_samples.map((data) => data.bpm),
        fill: false,
        tension:0.2,
        borderCapStyle: 'butt',
        borderJoinStyle: 'miter',                                                                                         
        backgroundColor:'red', 
        pointRadius:2,
        pointStyle:'circle', 
      },
    ],
  }

  const Chart2 = {
    labels: hrv_samples_sdnn.map((data) => data.timestamp),
    datasets: [
      {
        label: "hrv_sdnn",
        data: hrv_samples_sdnn.map((data) =>  data.hrv_sdnn),
        fill: false,
        tension:0.2,
        borderCapStyle: 'round',
        borderJoinStyle:'miter',
        backgroundColor:'red', 
        pointRadius:2,
        pointStyle:'circle',
        lineCap:'round',
        lineWidth:15
        
      },
    ],
    
  }



  return (
    <div className="App">
     
      <div style={{ height:"500px",width: "70%", margin:'40px auto' }}>
        <LineChart chartData={Chart} chartData2={Chart2}/>
      </div>
     
    </div>
  );
}

export default App;