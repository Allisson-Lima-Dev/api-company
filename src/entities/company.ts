export class Collaborators {
  public collaborator: string;
  public job: string;
  public salary: string;
  public date: any;

  constructor(props: Collaborators) {
    Object.assign(this, props);
  }
}

export class Company {
  public readonly name: string;
  private readonly collaborators: Collaborators[] = [];
  protected readonly nif_number?: string;

  constructor(
    name: string,
    // collaborators: Collaborators[],
    nif_number?: string
  ) {
    this.nif_number = nif_number;
    this.name = name;
    // this.collaborators = collaborators;
  }

  addCollaborator(collaborators: Collaborators): void {
    if (collaborators) {
      this.collaborators.push(collaborators);
    }
  }
}
