import { InternalServerError } from '@/api/types/types';
import { Config } from '@/ui/dropzone/Dropzone.types';

export type GetSettingsResponse = {
  orderCategories: string[];
  orderModes: string[];
  fileTypes: Config['accept'];
  maxFileSize: number;
};

export type GetSettingsError = InternalServerError;
