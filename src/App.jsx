import React from "react";
import {
    Box,
    Divider,
    Stats,
    Container,
    Button,
    TitleCenter,
    DescriptionCenter
} from "./component";
import { AppModeProvider } from "./context/AppModeProvider";
import "./App.css";

const App = () => {
    const { handleToggleAppMode, appMode } = AppModeProvider();

    return (
        <Container mode={appMode}>
            <Box width="25%" gap="15px">
                <Box>
                    <Stats mode={appMode} title="2m+" desc="nisi ut aliquid" />
                </Box>
                <Box>
                    <Divider mode={appMode} width="20%" align="left" />
                </Box>
                <Box>
                    <Stats mode={appMode} title="100m+" desc="autem quibusdam" />
                </Box>
            </Box>
            <Box width="50%">
                <Box>
                    <DescriptionCenter mode={appMode} />
                </Box>
                <Box>
                    <TitleCenter mode={appMode} />
                </Box>
                <Box width="100%" justifyContent="center" alignItems="center">
                    <Button
                        onClick={handleToggleAppMode}
                        text={`TOGGLE ${appMode ? "DARK" : "LIGHT"} MODE`}
                    />
                </Box>
            </Box>
            <Box width="25%" gap="15px">
                <Box>
                    <Stats mode={appMode} title="1k+" desc="rerum facilis" align="right" />
                </Box>
                <Box>
                    <Divider mode={appMode} width="20%" align="right" />
                </Box>
                <Box>
                    <Stats mode={appMode} title="120k" desc="libero tempore" align="right" />
                </Box>
            </Box>
        </Container>
    )
}

export default App