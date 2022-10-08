import { InternalServerError } from '@/api/types/types';

export type GetStatisticsResponse = {
  ordersNumber: number;
  orderersNumber: number;
  contractorsNumber: number;
};

export type GetStatisticsError = InternalServerError;
