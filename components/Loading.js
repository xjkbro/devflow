import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function Loading() {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");
    return (
        <div
            styles={{
                height: "50vh",
                margin: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <ClipLoader color={color} loading={loading} size={150} />
        </div>
    );
}
