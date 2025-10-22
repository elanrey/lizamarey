document.addEventListener('DOMContentLoaded', function() {
    console.log('Chat script loaded');
    const sessionId = crypto.randomUUID();
    let chatOpen = false;
    const messages = [];

    // HTML for the chat widget
    const chatHTML = `
        <div class="floating-chat">
            <div class="chat-icon bg-primary" id="chat-toggle">
                <i class="fas fa-comments"></i>
            </div>
            <div class="chat-widget" id="chat-widget">
                <div class="chat-header bg-primary">
                    <span>Asistente de Chat</span>
                    <span class="chat-close" id="chat-close">&times;</span>
                </div>
                <div class="chat-messages" id="chat-messages">
                    <div class="message bot">Hola, ¿en qué puedo ayudarte hoy?</div>
                </div>
                <div class="chat-input">
                    <input type="text" placeholder="Escribe tu mensaje..." id="chat-input" />
                    <button id="chat-send">Enviar</button>
                </div>
            </div>
        </div>
    `;

    // Insert the chat HTML into the body
    document.body.insertAdjacentHTML('beforeend', chatHTML);

    // Elements
    const chatToggle = document.getElementById('chat-toggle');
    const chatWidget = document.getElementById('chat-widget');
    const chatClose = document.getElementById('chat-close');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');
    const chatMessages = document.getElementById('chat-messages');

    // Ensure chat is initially hidden
    chatWidget.style.display = 'none';

    // Toggle chat visibility
    function toggleChat() {
        chatOpen = !chatOpen;
        chatWidget.style.display = chatOpen ? 'flex' : 'none';
    }

    // Add message to UI
    function addMessage(text, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message ' + (isUser ? 'user' : 'bot');
        messageDiv.textContent = text;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Send message to API
    async function sendMessage(message) {
        addMessage(message, true);

        try {
            const response = await fetch('/api/v1/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: sessionId,
                    message: message
                })
            });

            const result = await response.json();

            // Assuming the API returns {message: "response text"}
            addMessage(result.message);

        } catch (error) {
            console.error('Error sending message:', error);
            addMessage('Lo siento, hubo un error. Inténtalo de nuevo.');
        }
    }

    // Event listeners
    chatToggle.addEventListener('click', toggleChat);
    chatClose.addEventListener('click', toggleChat);

    chatSend.addEventListener('click', () => {
        const message = chatInput.value.trim();
        if (message) {
            sendMessage(message);
            chatInput.value = '';
        }
    });

    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const message = chatInput.value.trim();
            if (message) {
                sendMessage(message);
                chatInput.value = '';
            }
        }
    });
});
