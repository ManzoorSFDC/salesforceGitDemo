public with sharing class ContactServiceClass {
    
    public static String getContactName(Id contactId) {
        Contact con = [
            SELECT Id, Name 
            FROM Contact 
            WHERE Id = :contactId
            LIMIT 1
        ];
        system.debug('Contact name : '+con.Name);
        return con.Name;
    }
}
