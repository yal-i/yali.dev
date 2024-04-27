export type ProjectProps = {
  name: string;
  description: string;
  image: string;
  href: string;
  type: "web" | "mobile";
};

export type ContactProps = {
  name: string;
  surname: string;
  email: string;
  subject: string;
  message: string;
};
