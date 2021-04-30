import { ResponsiveContainer, ScatterChart, LineChart, Tooltip, Line, CartesianGrid, XAxis, Label, YAxis, Scatter, Legend } from 'recharts';
const data = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 }, 
  { name: 'Page B', uv: 500, pv: 2400, amt: 2400 },
  { name: 'Page C', uv: 600, pv: 2400, amt: 2400 },
  { name: 'Page D', uv: 700, pv: 2400, amt: 2400 },

];

const steelData = [
  { type: 'AEB-L', hardness: 63, toughness: 5, temper: 300 },
  { type: 'AEB-L', hardness: 62, toughness: 8, temper: 325 },
  { type: 'AEB-L', hardness: 61, toughness: 20, temper: 350 },
  { type: 'AEB-L', hardness: 61.5, toughness: 25, temper: 375 },
  { type: '1084', hardness: 61.5, toughness: 1, temper: 325 },
  { type: '1084', hardness: 58.5, toughness: 3, temper: 350 },
  { type: '1084', hardness: 55.5, toughness: 7, temper: 375 },
  { type: '1084', hardness: 54, toughness: 9, temper: 400 },
];

const steel1084 = steelData.filter(d => d.type === '1084')
const steelAEBL = steelData.filter(d => d.type === 'AEB-L')



const renderLineChart = () => { 
  return(
    // <ResponsiveContainer width={700} height="80%"></ResponsiveContainer>
    <LineChart 
      
      width={400} 
      height={400} 
      data={data}
      margin={ { top: 20, right: 10, bottom: 20, left: 10} }

    >
      <Line type="monotone" dataKey="uv" stroke="#8884d8" isAnimationActive={false} />

      <CartesianGrid stroke="#000000" strokeDasharray="3 3" />
      <XAxis dataKey="name" tick={ {fill: "#212121"} } tickLine={{stroke: "#000000"}}>
        <Label value="Page or something" position="bottom" offset={0} />
      </XAxis>
      <YAxis />
      <Tooltip />
    </LineChart>
  )}

const renderSteelChart = () => {

  return (
    // <ResponsiveContainer width={700} height="80%">
    <ScatterChart 
      width={800} 
      height={600} 
      data={steelData}
      margin={ { top: 20, right: 10, bottom: 20, left: 10} }

    >

      <CartesianGrid stroke="#000000" strokeDasharray="3 3" />
      <XAxis dataKey="temper" 
          type="number"
          domain={['dataMin', 'dataMax']}
          tick={ {fill: "#212121"} } tickLine={{stroke: "#000000"}}
          unit="°F">
        <Label value="Tempering Temperature" position="bottom" offset={0} />
      </XAxis>
      <YAxis dataKey="hardness" unit="HRC" domain={['dataMin', 'dataMax']}>
        <Label value="Hardness" position="left" angle="-90" />
      </YAxis>
      <Tooltip />
      <Legend layout="vertical" wrapperStyle="right" />
      <Scatter name="1084" data={steel1084} fill="#8884d8" />
      <Scatter name="AEBL" data={steelAEBL} fill="#cccccc" line={true} lineType="fitting" />
      {/* <Scatter name="all" data={steelData} stroke="#000055"  /> */}
    </ScatterChart>
    // </ResponsiveContainer>
  )
}

/**
 * Options for improvement:
 * Tooltip has more information https://recharts.org/en-US/examples/CustomContentOfTooltip 
 */

export default renderSteelChart