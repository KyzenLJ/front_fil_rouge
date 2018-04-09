import { Condamnation } from "./condamnation";
import { Document } from "./document";

export class Suspect {

    nom: string;
    prenom:string;
    date_naissance:Date;
    adresse:string;
    ville:string;
    condamnations : Condamnation [];
    documents : Document[];
}
