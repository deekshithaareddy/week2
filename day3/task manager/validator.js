// i. validator.js - Input validation
//                       // TODO: Export these validation function

export function validateTitle(title) {
    if(!title){
        return "Title required"
    }
    if(title.length<=3){
        return "Minimum 3 characters required"
    }
    return true
}

  // 2. Validate priority (must be: low, medium, high)
                    export function validatePriority(priority) {
                        const priorities=['LOW','MEDIUM','HIGH']
                        let result=priorities.includes(priority)
                        if(result===false){
                            return "Invalid priority"
                        }
                        return true
                      }

  // 3. Validate due date (must be future date)
                      function validateDueDate(date) {
                        // Your code here
                        let dueDate=new Date('2024-10-20')
                        let today=new Date()
                        if(dueDate>today){
                            return "Invalid date"
                        }
                        return true
                      }
                      export {validateTitle,validatePriority,validateDueDate}
                      