const autoResponses = [
    "Hi there! 👋 How can I assist you today?",
    "We offer fast delivery across the UAE 🚚",
    "Need help with custom printing? We’ve got you covered!",
    "Check out our ongoing promotions 🎉",
    "You can contact our team 24/7 via chat or email."
  ];

  let chatInitialized = false;

  function toggleChatBot() {
    const chat = document.getElementById('chatWidget');
    const msgContainer = document.getElementById('chatMessages');
    const isVisible = chat.style.display === 'block';

    chat.style.display = isVisible ? 'none' : 'block';

    if (!chatInitialized && !isVisible) {
      autoResponses.forEach((msg, i) => {
        const el = document.createElement('div');
        el.style.marginBottom = '10px';
        el.style.background = '#f1f1f1';
        el.style.padding = '8px 12px';
        el.style.borderRadius = '8px';
        el.innerText = msg;
        setTimeout(() => msgContainer.appendChild(el), 500 * i);
      });
      chatInitialized = true;
    }
  }

  function sendUserMessage() {
    const input = document.getElementById('userMessage');
    const msg = input.value.trim();
    if (!msg) return;
    const el = document.createElement('div');
    el.style.marginBottom = '10px';
    el.style.background = '#e0f7fa';
    el.style.padding = '8px 12px';
    el.style.borderRadius = '8px';
    el.style.textAlign = 'right';
    el.innerText = msg;
    document.getElementById('chatMessages').appendChild(el);
    input.value = '';
  }