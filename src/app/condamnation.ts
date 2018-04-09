import { Suspect } from './suspect';

export class Condamnation {

    id?: number;
    motif: string;
    date_condamnation: string;
    suspect: Suspect;
}
