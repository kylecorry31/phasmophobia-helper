import { Evidence } from "./evidence";

export interface Ghost {
    id: number;
    name: string;
    evidence: Evidence[];
    traits: string[];
}