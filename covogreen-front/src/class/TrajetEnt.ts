export class TrajetEnt {
    public id: number;
    public depart: string;
    public destination: string;
    public dateDepart: Date;
    public auteur: string;
    public nombrePlaceDisponible: number;

    constructor(id: number, depart: string, destination: string, dateDepart: Date, auteur: string, nombrePlaceDisponible: number ) {
        this.id = id;
        this.depart = depart;
        this.destination = destination;
        this.dateDepart = dateDepart;
        this.auteur = auteur;
        this.nombrePlaceDisponible = nombrePlaceDisponible;
    }
}
