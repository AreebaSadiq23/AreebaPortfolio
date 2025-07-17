"use client";
import React, { useEffect, useState } from "react";
import Loader from "@/app/components/loader";

const AppLoaderWrapper = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        background: "#0f172a",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <Loader />
      </div>
    );
  }

  return <>{children}</>;
};

export default AppLoaderWrapper; 