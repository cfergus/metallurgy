import { ScatterChart, Tooltip, CartesianGrid, XAxis, Label, YAxis, Scatter, Legend } from 'recharts';

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


  console.log( unrolledData )

  // <ResponsiveContainer width={700} height="80%">
  return (
    <div>
      <ScatterChart
        width={800}
        height={600}
        data={unrolledData}
        margin={{ top: 20, right: 10, bottom: 20, left: 200 }}
      >

        <CartesianGrid stroke="#000000" strokeDasharray="3 3" />
        <XAxis dataKey="toughness"
          type="number"
          domain={['auto', 'auto']}
          tick={{ fill: "#212121" }} tickLine={{ stroke: "#000000" }}
          unit="ft/lb">
          <Label value="Toughness" position="bottom" offset={0} />
        </XAxis>
        <YAxis dataKey="hardness" unit="HRC" domain={['auto','auto']}>
          <Label value="Hardness" position="left" angle="-90" />
        </YAxis>
        <Tooltip />
        <Legend layout="vertical" verticalAlign="top" align="right" margin={ {left: 12 } } />
        {/* <Scatter name="1084" data={steel1084} fill="#8884d8" />
        <Scatter name="AEBL" data={steelAEBL} fill="#cccccc" line={true} lineType="fitting" /> */}

        {data.steel.map(asScatterSeries)}

        {/* <Scatter name="all" data={unrolledData} stroke="#000055"  /> */}
      </ScatterChart>
    </div>
  )


  function asScatterSeries( steel ) {
    const fillColor = steel.id.substring(0,6)
    return <Scatter name={steel.name} data={steel.samples} fill={'#' + fillColor} line={true} lineType="fitting" />
  }
  /*
        Some alternatives
         domain={['dataMin', 'dataMax']}
         unit="°F" (on xaxis)
         <Legend layout="vertical" wrapperStyle="right" />
         https://recharts.org/en-US/examples/LegendEffectOpacity - to help guide a user to the chart
  */
}
