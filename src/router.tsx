import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Home from "./routes/Home";
import MbitTest from "./routes/MbtiTest";
import TestResult from "./routes/TestResult";

function MbtiRouter(){
    return (
        <HashRouter>
            <Routes>
                <Route path="/mbtitest/result/:result" element={<TestResult />} />
                <Route path="/mbtitest" element={<MbitTest />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </HashRouter>
    )
}

export default MbtiRouter;