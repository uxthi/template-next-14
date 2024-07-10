import Navbar from "@/features/navbar";
import SideBar from "@/features/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <SideBar />
      <div
        style={{
          width: "100%",
        }}
      >
        <Navbar />
        <div
          style={{
            padding: "8px 24px",
            height: "100%",
            overflowY: "auto",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
