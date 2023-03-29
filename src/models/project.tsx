// Expected fields
export type Project = {
  active: null | boolean;
  name: null | string;
  description: null | string;
  longDescription: null | string;
  langs: undefined | Array<string>;
  media: null | string;
  links: undefined | Array<any>;
  className: null | string;
};

// Default value (empty)
export const InitProject: Project = {
  active: null,
  name: null,
  description: null,
  longDescription: null,
  langs: [],
  media: null,
  links: [],
  className: null,
};
