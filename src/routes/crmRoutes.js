import { 
  addNewContact,
  deleteContact,
  getContacts,
  getContactWithId,
  updateContact, 
} from "../controllers/crmController";

const routes = (app) => {
  app.route('/contact')
    .get((req, res, next) => {
    next();
    }, getContacts)
  
    .post(addNewContact);
    
  app.route('/contact/:contactId')
    .get(getContactWithId)

    .put(updateContact)
    
    .delete(deleteContact);

}

export default routes;