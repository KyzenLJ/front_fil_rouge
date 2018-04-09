import { Profil } from './profil';


export class Agent {


id?: number;
nom = '';
prenom = '';
adresse = '';
ville ='';
email = '';
motdepasse = '';
profil: Profil ;

constructor(nom, prenom, adresse, ville, email, motdepasse, profil) {
    this.nom = nom;
    this.prenom = prenom;
    this.adresse = adresse;
    this.ville = ville;
    this.email = email;
    this.motdepasse = motdepasse,
    this.profil = profil;
}

}
