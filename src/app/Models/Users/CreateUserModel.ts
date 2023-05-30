export interface CreateUserModel {
  name: string;
  image: String; // Puedes ajustar el tipo según cómo manejes la imagen (como base64, URL, etc.)
  lastName: string;
  secondLastName: string;
  dateOfBirth: Date;
  numberPhone: string;
  document: string;
  email: string;
  password: string;
  documentTypeId: number;
  addressId: number;
  rolId: number;
}
