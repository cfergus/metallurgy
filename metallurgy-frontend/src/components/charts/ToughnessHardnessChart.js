import { ScatterChart, Tooltip, CartesianGrid, XAxis, Label, YAxis, Scatter, Legend, ResponsiveContainer } from 'recharts';
import './ChartGeneric.css'


export default function ToughnessHardnessChart( { data } ) {

  const unrolledData = []

  data.steel.forEach( steel => {
    steel.samples.forEach( sample => {
      unrolledData.push( {
        id: sample.id,
        name: steel.name,
        hardness: sample.hardness,
        toughness: sample.toughness
      } )
    } )
  } )

 return (
    <ResponsiveContainer width="100%" aspect={1.25}>
      <ScatterChart
        data={unrolledData}
        margin={{ top: 20, right: 10, bottom: 20, left: 20 }}
      >

        <CartesianGrid stroke="#000000" strokeDasharray="3 3" />
        <XAxis dataKey="toughness"
          type="number"
          domain={['auto', 'auto']}
          tick={{ fill: "#212121" }} tickLine={{ stroke: "#000000" }}
          unit="ft/lb">
          <Label value="Toughness" position="bottom" offset={0} />
        </XAxis>
        <YAxis dataKey="hardness" unit="HRC" domain={['auto','auto']} >
          <Label value="Hardness" position="left" angle="-90" />
        </YAxis>
        <Tooltip isAnimationActive={false} />

        {legend( data )}
        
        {data.steel.map(asScatterSeries)}

      </ScatterChart>
    </ResponsiveContainer>
  )

  function legend( data ) {
    if (data.steel.length > 1) {
      return (
        <Legend layout="vertical" verticalAlign="top" align="right" margin={{ left: 12 }} />
      )
    }
  }

  function asScatterSeries( steel ) {
    const fillColor = steel.id.substring(0,6)
    return <Scatter 
        name={steel.name} 
        data={steel.samples} 
        fill={'#' + fillColor} 
        line={true} 
        lineType="fitting"
        isAnimationActive={false} />
  }
  /*
  Some alternatives
    unit="°F" (on xaxis)
    https://recharts.org/en-US/examples/LegendEffectOpacity - to help guide a user to the chart
  */
}
