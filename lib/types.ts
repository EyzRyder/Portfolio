export type cardProps = {
  _id: string;
  title: string;
  descriptions: string;
  role: string;
  teck: string[];
};

export interface WorkProps extends cardProps {
  url?: string | null;
  image: string;
  githubRep?: string | null;
}
