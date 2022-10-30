import { UseQueryOptions } from '@tanstack/react-query';

import { getSettingsQueryKey } from '@/api/actions/settings/settings';
import { GetSettingsError, GetSettingsResponse } from '@/api/actions/settings/settings.types';
import { useQuery } from '@/hooks/useQuery/useQuery';

export const useGetSettings = (options?: UseQueryOptions<GetSettingsResponse, GetSettingsError>) => {
  return useQuery<GetSettingsResponse, GetSettingsError>([getSettingsQueryKey], options);
};
