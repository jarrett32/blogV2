interface Post {
  title: string;
  description: string;
  date: string;
  body: {
    code: string;
    html: string;
  };
  url?: string;
  code?: string;
}

interface Project {
  title: string;
  subTitle?: string;
  description: string;
  image: string;
  github?: string;
  code?: string;
  link?: string;
}
