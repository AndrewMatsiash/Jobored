export interface IVacancy {
  id: number;
  id_client: number;
  payment_from: number;
  payment_to: number;
  date_pub_to: number;
  date_archived: number;
  date_published: number;
  address: null;
  payment: null;
  profession: string;
  work: string;
  metro: Metro[];
  currency: string;
  moveable: boolean;
  agreement: boolean;
  anonymous: boolean;
  type_of_work: Agency;
  place_of_work: Agency;
  education: Agency;
  experience: Agency;
  maritalstatus: Agency;
  children: Agency;
  already_sent_on_vacancy: boolean;
  languages: any[];
  driving_licence: any[];
  catalogues: Catalogue[];
  agency: Agency;
  town: Town;
  client_logo: string;
  age_from: number;
  age_to: number;
  gender: Agency;
  firm_name: string;
  firm_activity: string;
  link: string;
  vacancyRichText: string;
}

export interface Agency {
  id: number;
  title: string;
}

export interface Catalogue {
  id: number;
  title: string;
  positions: Agency[];
}

export interface Metro {
  id: number;
  title: string;
  id_metro_line: number;
}

export interface Town {
  id: number;
  title: string;
  declension: string;
  genitive: string;
}
