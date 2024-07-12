import Section from './components/Section';

let maf: string[][] = [["Engine>Airflow>Dynamic (Dynamic Airflow)", 'High RPM Disable (100)', 'High Rpm Enable (80)']
, ["Engine>Fuel>Oxygen Sensors (Monitoring)", 'o2 Readiness ECT (400)']
, ['Engine>Fuel>Oxygen Sensors (Long Term Fuel Trims)', 'Min ECT (400)']
, ['Engine>Fuel>Oxygen Sensors (Long Term Fuel Trims)', 'Max ECT (10)']
, ["Engine>Fuel>Temperature Control", 'COT (Disable)']
, ["Engine>Fuel>Cutoff, DFCO (Deceleration Fuel Cutoff)", 'Enable ECT (400)']
, ["Engine>Fuel>Cutoff, DFCO (Deceleration Fuel Cutoff)", 'Disable ECT (399)']
, ["Write-Scan-Update Engine>Airflow (MAF Calibration) Tables (MAF Hi/Lo Error)", ]
, ["Reset LTFT", ]
];

let idle: string[][] = [["Engine>Idle>RPM (Base Setpoint)", 'Base (+200)']
, ["Engine>Idle>RPM (Overspeed RMP Err Mult)", 'halve (0.5)']
, ["?Engine>Idle>RPM (Underspeed RMP Err Mult)", 'halve (0.5)']
, ["Engine>Idle>Airflow (Airflow Final Minimum)", 'Add 25 Pct (x1.25)']
, ["Engine>Spark>Advance (Idle Spark Advance)", 'In idle area set spark to 20 (to 26) degrees, interpolate.']
];

let speed: string[][] = [["Engine>Idle>RPM (Base Setpoint)", 'Base (+200)']
, ["Engine>Idle>RPM (Overspeed RMP Err Mult)", 'halve (0.5)']
, ["?Engine>Idle>RPM (Underspeed RMP Err Mult)", 'halve (0.5)']
, ["Engine>Idle>Airflow (Airflow Final Minimum)", 'Add 25 Pct (x1.25)']
, ["Engine>Spark>Advance (Idle Spark Advance)", 'In idle area set spark to 20 (to 26) degrees, interpolate.']
];

function App() {
  return (
    <>
    {/* <h1>Gen 4 Maf Tuning Guide</h1>
    <a href="https://www.youtube.com/watch?v=UPvjJZfdhPA">Video (UPvjJZfdhPA)</a>
    
      <Section items={maf} /> */}
      <h1>Cam Idle Tuning</h1>
      <a href="https://www.youtube.com/watch?v=r00uXQomvRI">Video (r00uXQomvRI)</a>
      <Section items={idle}/>
    
    </>
  );
}

export default App;