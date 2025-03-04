import { InteractiveDashboard } from "@metabase/embedding-sdk-react/nextjs";

const Analytics = () => {
  return (
    <main className="p-4">
      <h1 className="mb-4 text-2xl">Interactive Dashboard Example</h1>
      <InteractiveDashboard dashboardId={4} />
    </main>
  );
};

export default Analytics;
