import type { BaseDeletableDataType } from '../base/base.type.ts';

interface UserDataType extends BaseDeletableDataType {
  username: string;
  email: string;
  isEmailVerified: boolean;
}

export type { UserDataType };
