import React from "react";
import Button from "./component/Button";
import Box from "./component/Box";
import Divider from "./component/Divider";
import Container from "./component/Container";
import Stats from "./component/Stats";
import "./App.css";

const App = () => {
  return (
    <Container>
      <Box width="25%" gap="15px">
        <Box>
          <Stats title="2m+" desc="nisi ut aliquid" />
        </Box>
        <Box>
          <Divider width="20%" color="black" align="left" />
        </Box>
        <Box>
          <Stats title="100m+" desc="autem quibusdam" />
        </Box>
      </Box>
      <Box width="50%">
        <Box>
          <p style={{ textAlign: "center", fontSize: "12px" }}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam
          </p>
        </Box>
        <Box>
          <p style={{ textAlign: "center", fontSize: "36px" }}>
            Consectetur, <span style={{ color: "rgba(255, 0, 0, 1)" }}>adipisci</span> velit, sed
            <span style={{ color: "rgba(255, 0, 0, 1)" }}>quia non</span>
          </p>
        </Box>
        <Box width="100%" justifyContent="center" alignItems="center">
          <Button text="TOGGLE DARK MODE" />
        </Box>
      </Box>
      <Box width="25%" gap="15px">
        <Box>
          <Stats title="1k+" desc="rerum facilis" align="right" />
        </Box>
        <Box>
          <Divider width="20%" color="black" align="right" />
        </Box>
        <Box>
          <Stats title="120k" desc="libero tempore" align="right" />
        </Box>
      </Box>
    </Container>
  )
}

export default App