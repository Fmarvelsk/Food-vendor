function SVG (props) {
    return (
        props.items.map( (svg, i) => (
                        <div className="svg" key={i}>
            <svg height="100" width="90">
        <circle cx="50" cy="50" r="25" stroke="blak" strokeWidth="3" fill="#5AF464" /><text x="43" y="57" fill="#ffffff">{svg.number}</text>
     </svg> 
        <div className="p-svg "> <h5 className="p-change p-color-header">{svg.header}</h5>
        <p className="p-change">{svg.body}</p>
     </div>
    
            </div>
        
        ))
)
}
export default SVG