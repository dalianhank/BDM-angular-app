import { EmailAddressType } from './enum/emailAddressType';

export interface Email{
        id: number;
        clientName: string;
        parentNPN: string;
        emailAddress: string;
        emailAddressType : EmailAddressType;
}