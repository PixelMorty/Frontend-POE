import { Observable } from 'rxjs';

export interface ICrud<T> {
  /**
   * findAll()
   * @returns An Observable of an array of T
   * T is a generic, must be defined in services
   * that implements this Interface
   */
  findAll(): Observable<T[]>;

  /**
   * fondOne(id: number)
   * @param id id of the T object i want to Observe
   * @returns Observable of a T object
   */
  findOne(id: number): Observable<T>;

  /**
   * create(datas: any) Insert a new Object in the database
   * @param datas Datas representing a T object
   * @returns T object after creation
   */
  create(datas: any): Observable<T>;

  /**
   * update(datas: T) Update an Object in the database
   * @param datas Datas representing Object to update in the database
   * @returns void
   */
  update(datas: T, id: Number): void;

  /**
   * delete(datas: T) Remove an Object from the database
   * @param datas Object I want to delete in the database
   * @returns void
   */
  delete(datas: T): void;
}
