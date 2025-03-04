import { InteractiveQuestion } from "@metabase/embedding-sdk-react/nextjs";

const Analytics = () => {
  return (
    <main className="p-4">
      <InteractiveQuestion questionId={200} />
    </main>
  );
};

export default Analytics;
