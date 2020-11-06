import { Email } from './email';

export interface Broker {
  clientName: string;
  npn: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  emailAddresses: Email[];
}
