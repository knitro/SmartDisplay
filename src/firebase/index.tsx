import FirebaseContext from './context';
import Firebase from './firebase';
import { UserDataInterface as FirebaseDataInterface} from './UserDataInterface' 

export default Firebase;
 
export { FirebaseContext };
export type UserDataInterface = FirebaseDataInterface;