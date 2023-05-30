export interface GetUserModel {
  userId: number;
  name: string;
  image: string;
  lastName: string;
  secondLastName?: string;
  dateOfBirth: Date;
  numberPhone: string;
  document: string;
  email: string;
  documentTypeId: number;
  addressId?: number | null;
  rolId: number;
  edad: number;
}
