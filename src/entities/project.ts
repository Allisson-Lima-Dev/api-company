import { uuid } from "uuidv4";

export class Project {
  public readonly id: string | undefined;
  public title: string | undefined;
  public image: string | undefined;
  public discription: string | undefined;
  public certifacateURL: string | undefined;

  constructor(props: Omit<Project, "id">, id?: string) {
    Object.assign(this, props);
    if (!id) {
      this.id = uuid();
    }
  }
}
