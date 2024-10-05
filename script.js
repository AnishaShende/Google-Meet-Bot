document.getElementById("connect-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const botName = document.getElementById("bot-name").value;
    const meetingLink = document.getElementById("meeting-link").value;
    
    // Handle form submission logic
    alert(`Bot Name: ${botName}\nMeeting Link: ${meetingLink}`);
    
    // Here you can add the logic to connect to the Recall.ai API
});
