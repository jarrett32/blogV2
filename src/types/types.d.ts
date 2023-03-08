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
  description: string;
  image: string;
  github?: string;
  link?: string;
}
