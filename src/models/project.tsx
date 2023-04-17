import { StaticImageData } from "next/image";

// Type of media in Project model
export type Media = {
  name: string;
  image: StaticImageData | null
}

// Expected fields
export type Project = {
  active: null | boolean;
  name: null | string;
  description: null | string;
  longDescription: null | string;
  contribution: null | string;
  langs: undefined | Array<string>;
  media: null | Array<Media>;
  links: undefined | Array<any>;
  className: null | string;
};

// Default value (empty)
export const InitProject: Project = {
  active: null,
  name: null,
  description: null,
  longDescription: null,
  contribution: null,
  langs: [],
  media: null,
  links: [],
  className: null,
};
