export type ReviewFormProps = {
  firstName: string;
  lastName: string;
  rate: number;
  serviceName: string;
  comment: string;
  email: string | null;
};
export type ContactFormProps = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  zipcode: string;
  serviceName: string;
  comment: string;
  phoneNumber: string;
};
