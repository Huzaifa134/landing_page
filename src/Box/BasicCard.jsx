import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <div className="flex gap-10 justify-center flex-wrap">
      <Card sx={{ minWidth: 300 }} style={{ height: "200px" }}>
        <CardContent className="ml-4">
          {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
  </Typography> */}

          <h1 className="font-semibold text-3xl">Parity Palkadot</h1>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Palkadot
          </Typography>
          <p className="font-medium">
            wss://rpc.polkadot.io
            <br />
          </p>
        </CardContent>
        <div className="mt-5">
          <div
            style={{
              background: "#D9D9D9",
              height: "2px",
              width: "100%",
              margin: "0 auto",
            }}
          ></div>

          <div className="flex mt-3 items-center">
            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              height="1em"
              width="1em"
              className="ml-5 mr-4"
              style={{height:"20px" , width:"20px"}}
            >
              <path d="M256 176a80 80 0 1080 80 80.24 80.24 0 00-80-80zm172.72 80a165.53 165.53 0 01-1.64 22.34l48.69 38.12a11.59 11.59 0 012.63 14.78l-46.06 79.52a11.64 11.64 0 01-14.14 4.93l-57.25-23a176.56 176.56 0 01-38.82 22.67l-8.56 60.78a11.93 11.93 0 01-11.51 9.86h-92.12a12 12 0 01-11.51-9.53l-8.56-60.78A169.3 169.3 0 01151.05 393L93.8 416a11.64 11.64 0 01-14.14-4.92L33.6 331.57a11.59 11.59 0 012.63-14.78l48.69-38.12A174.58 174.58 0 0183.28 256a165.53 165.53 0 011.64-22.34l-48.69-38.12a11.59 11.59 0 01-2.63-14.78l46.06-79.52a11.64 11.64 0 0114.14-4.93l57.25 23a176.56 176.56 0 0138.82-22.67l8.56-60.78A11.93 11.93 0 01209.94 26h92.12a12 12 0 0111.51 9.53l8.56 60.78A169.3 169.3 0 01361 119l57.2-23a11.64 11.64 0 0114.14 4.92l46.06 79.52a11.59 11.59 0 01-2.63 14.78l-48.69 38.12a174.58 174.58 0 011.64 22.66z" />
            </svg>
            <p>v1.50-a3dc2f</p>
          </div>
        </div>
      </Card>

      <Card sx={{ minWidth: 300 }} style={{ height: "200px" }}>
        <CardContent className="ml-4">
          {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
</Typography> */}

          <h1 className="font-semibold text-3xl">Meta Data</h1>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            v14
          </Typography>
         
        </CardContent>
        <div className="mt-11">
          <div
            style={{
              background: "#D9D9D9",
              height: "2px",
              width: "100%",
              margin: "0 auto",
            }}
          ></div>

          <button className="bg-blue-600 p-2 text-white rounded-md text-center mt-1 ml-5"   >Show Metadata</button>
        </div>
      </Card>

      <Card sx={{ minWidth: 300 }} style={{ height: "200px" }}>
        <CardContent className="ml-4">
          {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      Word of the Day
</Typography> */}

          <h1 className="font-semibold text-3xl">18,708,895</h1>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Current Block
          </Typography>
          
        </CardContent>
        <div className="mt-11">
          <div
            style={{
              background: "#D9D9D9",
              height: "2px",
              width: "100%",
              margin: "0 auto",
            }}
          ></div>

          <div className="flex mt-3 items-center">
          <svg
          viewBox="0 0 1024 1024"
          fill="currentColor"
          height="1em"
          width="1em"
          className="ml-5 mr-4"
          style={{height:"20px" , width:"20px"}}
        >
          <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm176.5 585.7l-28.6 39a7.99 7.99 0 01-11.2 1.7L483.3 569.8a7.92 7.92 0 01-3.3-6.5V288c0-4.4 3.6-8 8-8h48.1c4.4 0 8 3.6 8 8v247.5l142.6 103.1c3.6 2.5 4.4 7.5 1.8 11.1z" />
        </svg>
            <p>1</p>
          </div>
        </div>
      </Card>

      <Card sx={{ minWidth: 300 }} style={{ height: "200px" }}>
        <CardContent className="ml-4">
          {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    Word of the Day
</Typography> */}

          <h1 className="font-semibold text-3xl">18,708,893</h1>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Finalized Block
          </Typography>
          
        </CardContent>
        <div className="mt-11">
          <div
            style={{
              background: "#D9D9D9",
              height: "2px",
              width: "100%",
              margin: "0 auto",
            }}
          ></div>

          <div className="flex mt-3 items-center">
          <svg
          viewBox="0 0 1024 1024"
          fill="currentColor"
          height="1em"
          width="1em"
          className="ml-5 mr-4"
          style={{height:"20px" , width:"20px"}}
        >
          <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm176.5 585.7l-28.6 39a7.99 7.99 0 01-11.2 1.7L483.3 569.8a7.92 7.92 0 01-3.3-6.5V288c0-4.4 3.6-8 8-8h48.1c4.4 0 8 3.6 8 8v247.5l142.6 103.1c3.6 2.5 4.4 7.5 1.8 11.1z" />
        </svg>
            <p>1</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
