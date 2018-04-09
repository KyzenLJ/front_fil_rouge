import { Suspect } from "./suspect";

export class Document {

    id: number;
    type: string;
    numero: string;
    date_emission: Date;
    suspect: Suspect;
}
