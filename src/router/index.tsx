import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";
const LayoutCom = () => {
    return (
        <Suspense fallback={<>loading ...</>}>
            <Router>
                <Routes>
                    {routes.map((item, index) => {
                        return (
                            <Route
                                key={index}
                                path={item.path}
                                element={<item.component />}
                            />
                        );
                    })}
                </Routes>
            </Router>
        </Suspense>
    );
};
export default LayoutCom;
