import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProjetI } from '../models/projet.interface';
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  private projectsCollection: AngularFirestoreCollection<ProjetI>;
  private projects: Observable<ProjetI[]>;

  constructor(db:AngularFirestore) {
    this.projectsCollection = db.collection<ProjetI>('projects');
    this.projects = this.projectsCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data};
        });
      }
    ));
  }

  getProjects() {
    return this.projects;
  }

  getProject(id: string) {
    return this.projectsCollection.doc<ProjetI>(id).valueChanges();
  }

  updateProject(project: ProjetI, id: string) {
    return this.projectsCollection.doc(id).update(project);
  }

  addProject(project: ProjetI) {
    return this.projectsCollection.add(project);
  }

  removeProject(id: string) {
    return this.projectsCollection.doc(id).delete();
  }
}
