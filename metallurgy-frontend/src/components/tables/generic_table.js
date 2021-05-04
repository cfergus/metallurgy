export default function GenericTable( {data} ) {

  const debugData = data;
  console.log( debugData )

  return (
    <ul>
      { 
      data.steel.map( steel => {
        return (
          <li key={steel.id}>{steel.name} : {steel.samples.length} samples </li>
        )
      })
      }
    </ul> 
  )
}