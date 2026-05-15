// 2.OTP Countdown Simulator (Console App)

        // Simulate OTP sending flow in Node.js:
        
        // Show “OTP Sent Successfully”
        
        // Start 10-second countdown
        
        // Allow resend only after countdown ends

        const resend=()=>"OTP sent successfully"
        let seconds=5;
        let intervelId=setInterval(()=>{
            seconds--;
            console.log(`OTP can resend after ${seconds+1} secs`)
            if(seconds===0){
                console.log("Resend OTP")
                clearInterval(intervelId)
            }
        })
        
        



