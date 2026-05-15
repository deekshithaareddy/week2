// 🧪 Given Data:
              const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

// 🎯 Task
    // 1. Create a shallow copy of user
    const usercp={...user}

    // 2. Change:
    //       i. name in the copied object
    //       ii. preferences.theme in the copied object
    //       iii .Log both original and copied objects
    //       iv. Observe what changes and what doesn’t


          usercp.name="Ram"
          usercp.preferences.theme="bright"
          console.log(user)
          console.log(usercp)
