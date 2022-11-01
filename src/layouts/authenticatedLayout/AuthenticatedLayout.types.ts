import { ReactNode } from 'react';

import { RoleTypes } from '@/api/types/types';

export type AuthenticatedLayoutProps = { children?: ReactNode; acceptedRoles?: RoleTypes[] };
