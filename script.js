function openWhatsApp() {
  var phoneNumber = "5521964069282";

  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  var link = isMobile ? "https://api.whatsapp.com/send?phone=" : "https://web.whatsapp.com/send?phone=";
  
  window.location.href = link + phoneNumber;
}

