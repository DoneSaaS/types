interface BaseModelType {
  clientId?: string;
  createdAt?: Date;
}

interface BaseDataType extends Omit<BaseModelType, "clientId"> {
  id?: string;
}

interface BaseUpdatableDataType extends BaseDataType {
  updatedAt?: Date;
}

interface BaseDeletableDataType extends BaseDataType {
  isDeleted?: boolean;
  deletedAt?: Date;
}

export type {
  BaseDataType,
  BaseDeletableDataType,
  BaseModelType,
  BaseUpdatableDataType,
};
