
import { db } from './firebase';
import { getFirestore, query, collection, getDocs, where,orderBy, deleteDoc, updateDoc} from 'firebase/firestore';

class Service {
    constructor() {
      // Initialize Firebase as before
    }
  
    // More advanced getCollection method
    async getCollection(collectionPath, queryBuilder = {}) {
        try {
          const pathParts = collectionPath.split('/');
      let ref=null;
          for (const pathPart of pathParts) {
            if (queryBuilder.documentId) {
              ref = collection(db,pathPart).doc(queryBuilder.documentId);
              queryBuilder.documentId = null; // Reset documentId for nested collections
            } else {
                ref = collection(db,pathPart);
            }
          }
      
          // Apply where conditions
        //   if (queryBuilder.where) {
        //     queryBuilder.where.forEach(({field,op,value}) => {
        //         docQuery.push(where(field,op,value))
        //     });
        //   }
      
        //   // Apply orderBy conditions
        //   if (queryBuilder.orderBy) {
        //     queryBuilder.orderBy.forEach(({field,op,value}) => {
        //         docQuery.push(orderBy(field,op,value))
        //     });
        //   }
      
        //   // Apply limit and offset for pagination
        //   if (queryBuilder.limit) {
        //     query = query.limit(queryBuilder.limit);
        //   }
      
        //   if (queryBuilder.offset) {
        //     query = query.offset(queryBuilder.offset);
        //   }
        let docQuery=query(ref,queryBuilder)
          const snapshot = await getDocs(docQuery);
          const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          return data;
        } catch (error) {
          throw error;
        }
      }
  
    // More advanced addDocument method with transaction support
    async addDocument(collectionName, data, transaction = null) {
      try {
        if (!transaction) {
          const docRef = await setDoc(doc(db, collectionName), data); 
          return docRef.id;
        } else {
          const docRef = collection(db,collectionName).doc(); // Generate a reference
          transaction.set(docRef, data);
          return docRef.id;
        }
      } catch (error) {
        throw error;
      }
    }

     // More advanced addDocument method with transaction support
     async updateDocument(collectionName,id,data) {
        try {
          if (!transaction) {
            const docRef = await setDoc(doc(db,collectionName, id), data);
            return docRef.id;
          } else {
            const docRef = await setDoc(doc(db,collectionName, id), data);
            return docRef.id;
          }
        } catch (error) {
          throw error;
        }
      }

      async deleteDocument(collectionName,doc) {
        try {
            const docRef = await deleteDoc(doc(db,collectionName,doc ));
            return docRef;
        } catch (error) {
          throw error;
        }
      }
      async deleteField(collectionName,properties) {
        try {
            const docRef = await deleteDoc(doc(db,collectionName,doc ));
            const deleteQuery={}
            if(Array.isArray(properties)){
                properties.map((property) =>{
                    deleteQuery[property]=deleteField()
                })
            }else{
                deleteQuery={properties:deleteField()}
            }
            if(deleteQuery){
            const updateStatus=await updateDoc(docRef,deleteQuery);
            return updateStatus
            }
            return null
        } catch (error) {
          throw error;
        }
      }
}

const service = new Service()
export default service;