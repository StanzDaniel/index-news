import { Subject } from "rxjs";

export class SubjectManager {
  private subject = new Subject();

  getSubject() {
    return this.subject.asObservable();
  }

  setSubject(value: string) {
    return this.subject.next(value);
  }
}