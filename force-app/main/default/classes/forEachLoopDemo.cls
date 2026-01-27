public with sharing class forEachLoopDemo {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getListAccounts() {
        try {
            return [SELECT Id, Name FROM Account order by lastModifiedDate desc LIMIT 5];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}