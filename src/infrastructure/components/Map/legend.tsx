import { Typography } from "@mui/material";


type LegendProps = {
    title: string;
    colors: string[];
    labels: string[];
}

export const DiscreteLegend = ({ title, colors, labels } : LegendProps) => {
    return (
    <div className="leaflet-bottom leaflet-left">
        <div className="leaflet-control leaflet-bar">
            <div
                style={{
                    backgroundColor: "white",
                    padding: "1.5rem",
                    borderRadius: "8px",
                    fontSize: "14px",
                    width: "10rem",
                    // height: "10rem"
                }}
            >
                <Typography variant="h6" mb="1rem">{title}</Typography>
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

export const ContinuousLegend = ({ title, labels, colors }: LegendProps) => {
    const gradient = `linear-gradient(to right, ${colors.join(", ")})`;

    return (
        <div className="leaflet-bottom leaflet-left">
            <div className="leaflet-control leaflet-bar">
                <div
                    style={{
                        backgroundColor: "white",
                        padding: "1.5rem",
                        borderRadius: "8px",
                        fontSize: "14px",
                        minWidth: "10rem",
                        // height: "10rem"
                    }}
                >
                    <Typography variant="h6" mb="1rem">{title}</Typography>
                    <div style={{ display: "flex", flexFlow: "column", alignItems: "center" }}>
                        <div
                            style={{
                                height: "1.5rem",
                                width: "100%",
                                backgroundImage: gradient,
                                borderRadius: "4px",
                            }}
                        ></div>
                        <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                            {labels.map((label, index) => (
                                <span key={index} style={{ margin: "0 4px" }}>
                                    {label}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Legend = (props: LegendProps) => {
    function getLegendType(props: LegendProps) {
        if (props.colors.length === props.labels.length) {
            return "discrete";
        }
        return "continuous";
    }
    const legendType = getLegendType(props);

    if (legendType === "discrete") {
        const { title, colors, labels } = props;
        return <DiscreteLegend title={title} colors={colors} labels={labels} />;
    } else if (legendType === "continuous") {
        const { title, labels, colors } = props;
        return <ContinuousLegend title={title} labels={labels} colors={colors} />;
    }
    return null;
};