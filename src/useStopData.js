import { request } from 'graphql-request';
import useSWR from 'swr';

const API = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';

export default function useStopData(id) {
  const { data, error } = useSWR(
    `{
      stop(id: "${id}") {
        name
          stoptimesWithoutPatterns {
          scheduledArrival
          realtimeArrival
          headsign
        }
      }
    }
    `,
    (query) => request(API, query),
    {
      // Refresh every 60 seconds
      refreshInterval: 60000,
    }
  );

  return {
    data: data && data.stop,
    error,
  };
}
