
export type InputProps = {
  texto: string;
  onClick?: () => void;
  className?: string; 
};

export interface Review {
  id: number;
  name: string;
  content: string;
  carPurchased: string;
  img: any;
  stars:number;
}
