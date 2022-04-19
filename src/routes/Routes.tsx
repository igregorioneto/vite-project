import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import App from "../App";
import TweetPage from "../TweetPage";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="" element={ <TweetPage /> }/>
            </Routes>
        </Router>
    );
}