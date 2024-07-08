import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";

export default function useGetCallById(id: string | string[]) {
  const [call, setCall] = useState<Call>();
  const [isCallLoading, setIsCallLoading] = useState(true);

  const client = useStreamVideoClient();

  useEffect(() => {
    if (!client) return;

    async function loadCall() {
      const { calls } = await client.queryCalls({
        filter_conditions: {
          id,
        },
      });
      if (calls.length > 0) setCall(calls[0]);

      setIsCallLoading(false);
    }

    loadCall();
  }, [client, id]);

  return {call, isCallLoading};
}
