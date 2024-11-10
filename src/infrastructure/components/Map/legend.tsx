

type LegendProps = {
    title: string
    colors: string[]
    labels: string[]
}

export const Legend = ({ title, colors, labels } : LegendProps) => {
    return (
        <div className="leaflet-bottom leaflet-left">
           <div className="leaflet-control leaflet-bar">
           <div
      style={{
        backgroundColor: "white",
        padding: "10px",
        borderRadius: "8px",
        fontSize: "14px",
      }}
    >
      <h4>{title}</h4>
        {colors.map((color, index) => (
            <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
                <div
                style={{
                    width: "18px",
                    height: "18px",
                    backgroundColor: color,
                    marginRight: "8px",
                }}
                ></div>
                {labels[index]}
            </div>
        ))}
    </div>
           </div>
        </div>
    )
}