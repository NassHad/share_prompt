import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";
import { Suspense } from "react";

export const metadata = {
    title: "Share Prompt",
    description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <Provider>
                    <div className="main">
                        <div className="gradient"></div>
                    </div>
                    <main className="app">
                        <Nav />
                        <Suspense fallback={<p>Loading posts...</p>}>
                            {children}
                        </Suspense>
                    </main>
                </Provider>
            </body>
        </html>
    );
};

export default RootLayout;
