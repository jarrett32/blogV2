interface Post {
  title: string;
  description: string;
  date: string;
  body: {
    html: string;
  };
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
